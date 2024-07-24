"use client"

import React, { useCallback, useState } from 'react'
import Input from '@/components/input'
import Button from '@/components/button'
import Alert from '@/components/alert'

const LandingPage = () => {

  const [valorCapturado, setValorCapturado] = useState<string>('')
  const [mostrarAlerta, setMostrarAlerta] = useState<boolean>(false)

  const cambioValorCapturado = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValorCapturado(e.target.value)
    if (mostrarAlerta) setMostrarAlerta(false)
  }, [setValorCapturado, mostrarAlerta, setMostrarAlerta])

  const alteraEstado = useCallback(() => {
    setMostrarAlerta(!mostrarAlerta)
  }, [setMostrarAlerta, mostrarAlerta])


  return (
    <div className="h-full ">
      <div className="container">
        <Input value={valorCapturado} onChange={cambioValorCapturado} />
        <Button onClick={alteraEstado} disabled={!valorCapturado}>
          Mostrar Alerta
        </Button>
        {mostrarAlerta && <Alert message={`Aviso de Alerta! | ${valorCapturado}`} onClose={alteraEstado} />}
      </div>
    </div>
  );
}

export default LandingPage;
