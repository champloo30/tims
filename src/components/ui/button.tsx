import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  disabled?: boolean,
  fullWidth?: boolean,
  large?: boolean,
  outline?: boolean,
  secondary?: boolean,
  title?: string, 
  onClick?: () => void,
  onSubmit?: (e: React.FormEventHandler<HTMLButtonElement>) => void,
  type?: 'submit' | 'button' | 'reset'
}

const Button: React.FC<ButtonProps> = ({ children, disabled, fullWidth, large, outline, secondary, title, onClick, onSubmit, type }) => {
  return (
    <button 
      className={`
        disabled:opacity-70 disabled-cursor-not-allowed
        py-2
        flex justify-center items-center gap-1
        rounded-lg
        transition
        ${fullWidth ? 'w-full' : 'w-fit px-4'}
        ${large ? 'text-2xl' : 'text-lg'}
        ${outline ? 'bg-transparent border-2 border-purple dark:border-violet text-purple dark:text-old-lace hover:bg-purple/20 dark:hover:bg-violet/20' : 'bg-purple dark:bg-violet text-old-lace hover:opacity-80'}
      `} 
      disabled={disabled} 
      title={title}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button