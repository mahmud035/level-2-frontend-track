import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
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

  const handleOutsideClose = (e: MouseEvent) => {
    // console.log('Clicked element =>', e.target);
    // console.log('containerRef =>', containerRef.current);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          'flex justify-center items-center fixed inset-0 bg-gray-500/70 invisible z-[999]',
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="w-full max-w-sm p-4 bg-white rounded-md"
        >
          {children}
          {/* <Modal.CloseButton /> */}
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
        <button onClick={onClose}>{children}</button>
      ) : (
        <button className="ml-auto" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="text-white bg-red-500 rounded-full size-7"
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
