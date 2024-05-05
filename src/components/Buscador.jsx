import React from 'react'
import Form from 'react-bootstrap/Form';

export const Buscador = ({onChange}) => {
  return (
           <Form.Control type="text" placeholder="Busca un colaborador" className="ForCellPhones" onChange={onChange}/>
  )
}
