import React from 'react'

type ButtonProps =  {
  onClick: () => void
  disabled: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      {children}
    </button>
  )
}

export default Button
