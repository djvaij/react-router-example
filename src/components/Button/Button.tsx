import { FC, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-white text-blue-500',
      },
      size: {
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          to={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
