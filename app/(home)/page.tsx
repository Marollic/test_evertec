"use client" 

import React, { useState } from 'react'
import Input from '@/components/input'
import Button from '@/components/button'
import Alert from '@/components/alert'

const LandingPage = () => {

  const [valorCapturado, setValorCapturado] = useState<string>('')
  const [mostrarAlerta, setMostrarAlerta] = useState<boolean>(false)

  const cambioValorCapturado = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorCapturado(e.target.value)
    if (mostrarAlerta) setMostrarAlerta(false)
  }

  const clickBoton = () => {
    setMostrarAlerta(true)
  }

  const cierrAlerta = () => {
    setMostrarAlerta(false)
  }

  return ( 
    <div className="h-full ">
    <div className="container">
      <Input value={valorCapturado} onChange={cambioValorCapturado} />
      <Button onClick={clickBoton} disabled={!valorCapturado}>
        Mostrar Alerta
      </Button>
      {mostrarAlerta && <Alert message={`Aviso de Alerta! | ${valorCapturado}`} onClose={cierrAlerta} />}
    </div>
    </div>
   );
}
 
export default LandingPage;
