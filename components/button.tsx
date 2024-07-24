// components/Button.tsx
import React from 'react'

interface ButtonProps {
  onClick: () => void
  disabled: boolean
  children: React.ReactNode // Type for children prop
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      {children}
    </button>
  )
}

export default Button
