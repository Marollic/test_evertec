"use client" 

import React, { useState } from 'react'
import Input from '@/components/input'
import Button from '@/components/button'
import Alert from '@/components/alert'

const LandingPage = () => {

  const [inputValue, setInputValue] = useState<string>('')
  const [showAlert, setShowAlert] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (showAlert) setShowAlert(false)
  }

  const handleButtonClick = () => {
    setShowAlert(true)
  }

  const handleCloseAlert = () => {
    setShowAlert(false)
  }

  return ( 
    <div className="h-full ">
    <div className="container">
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleButtonClick} disabled={!inputValue}>
        Show Alert
      </Button>
      {showAlert && <Alert message={`This is an alert! | ${inputValue}`} onClose={handleCloseAlert} />}
    </div>
    </div>
   );
}
 
export default LandingPage;
