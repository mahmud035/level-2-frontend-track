import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import cn from '../../utils/cn';

//* type Declaration
type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = {
  children: ReactNode;
};

//* Modal Context
const ModalContext = createContext<TModalContext | null>(null);

//* Modal Component
const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Store the element that had focus before modal opened
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the modal container when it opens
    containerRef.current?.focus();

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore focus to the element that opened the modal
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  // Trap focus inside modal
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const modalElement = containerRef.current;
    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    modalElement.addEventListener('keydown', handleTabKey as EventListener);

    return () => {
      modalElement.removeEventListener(
        'keydown',
        handleTabKey as EventListener
      );
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          'flex justify-center items-center fixed inset-0 bg-gray-500/70 z-[999]'
        )}
        onClick={handleOutsideClose}
        role="dialog"
        aria-modal="true"
      >
        <div
          ref={containerRef}
          className="w-full max-w-sm p-4 bg-white rounded-md"
          tabIndex={-1}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById('portal') as Element
  );
};

//* Modal Close Button
const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;

  return (
    <>
      {children ? (
        <button onClick={onClose} aria-label="Close modal">
          {children}
        </button>
      ) : (
        <button className="ml-auto" onClick={onClose} aria-label="Close modal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="text-white bg-red-500 rounded-full size-7"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

//* Modal Header
const Header = ({ children }: THeader) => {
  return (
    <div className="flex items-center justify-between w-full mb-3">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
