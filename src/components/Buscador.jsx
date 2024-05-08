import React from 'react'
import Form from 'react-bootstrap/Form';

export const Buscador = ({onChange}) => {
  return (
           <Form.Control
           className="ForCellPhones"
           type="text"
           placeholder="Busca un colaborador"

           name="nombre"
           onChange={onChange}
           />
  )
}
