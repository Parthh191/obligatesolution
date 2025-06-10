import { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer',
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-r from-indigo-500 to-purple-500',
          'text-white',
          'hover:shadow-lg hover:shadow-indigo-500/25',
          'hover:from-indigo-400 hover:to-purple-400',
          'hover:scale-105',
          'focus:ring-indigo-500',
        ],
        secondary: [
          'bg-gray-900',
          'text-gray-300',
          'border border-gray-800',
          'hover:text-white hover:border-indigo-500/30',
          'hover:bg-gray-800',
          'hover:translate-x-1',
          'focus:ring-gray-600',
        ],
        outline: [
          'border border-indigo-500/30',
          'bg-transparent',
          'text-indigo-400',
          'hover:bg-indigo-500/10',
          'hover:scale-[1.02]',
          'hover:border-indigo-400',
          'focus:ring-indigo-500',
        ],
      },
      size: {
        sm: 'h-8 px-3',
        default: 'h-10 px-4',
        lg: 'h-12 px-6',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };