import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cn from '../../utils/cn';

type TRef = HTMLButtonElement;
type TVariant = 'solid' | 'outline' | 'ghost';
type TButtonOptions = {
  variant?: TVariant;
};

type TButton = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ children, className, variant = 'solid', ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case 'outline':
          return 'btn-outline';
        case 'ghost':
          return 'btn-ghost';
        default:
          return 'btn-solid';
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
