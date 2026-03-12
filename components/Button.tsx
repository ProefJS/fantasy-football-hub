import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-bold rounded transition disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-slate-600 hover:bg-slate-700 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  }

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const widthStyle = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle}`}
    >
      {children}
    </button>
  )
}
