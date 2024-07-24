import React from 'react'

type AlertProps  = {
  message: string
  onClose: () => void
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div className="alert">
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">
        X
      </button>
    </div>
  )
}

export default Alert
