import React from 'react'

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ type = "button", onClick, children, className, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-purple text-white font-semiBold py-3 px-6 rounded-lg w-full hover:bg-purpleHover duration-300 ease-in-out hover:shadow-[0px_0px_32px_0px_rgba(99,60,255,0.25)]  ${className}`}>
      {children}
    </button>
  )
}

export default Button