import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const Formulario = () => {
  return (
    <div>
      <h2 className='text-center '>Agregar Colaborador</h2>
        <Form.Control type="text" placeholder="Nombre del Colaborador" />
      <br />
        <Form.Control type="email" placeholder="Email del Colaborador" />
      <br />
        <Form.Control type="number" placeholder="Edad del colaborador" />
      <br />
       <Form.Control type="text" placeholder="Cargo del Colaborador" />
      <br />
        <Form.Control type="tel" placeholder="Telefono del Colaborador" />
      <br />
      <div className="d-grid gap-2">
        <Button variant="primary">Agregar Colaborador</Button>{' '}
      </div>
    </div>
  )
}
