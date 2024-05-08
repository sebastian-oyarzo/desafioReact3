import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Listado = ({usuario,filtrado}) => {

  return (
    <div>
      <Table responsive="lg" striped bordered className='ForCellPhones'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {
            filtrado?.length ? ( filtrado.map( (filtro,index) => (
                <tr key={index}>
                <td>{filtro.id}</td>
                <td>{filtro.nombre}</td>
                <td>{filtro.correo}</td>
                <td>{filtro.edad}</td>
                <td>{filtro.cargo}</td>
                <td>{filtro.telefono}</td>
              </tr>
            )
            )
            ) : usuario?.length ? ( usuario.map( (user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>{user.edad}</td>
                <td>{user.cargo}</td>
                <td>{user.telefono}</td>
            </tr>
            ))) :
              <tr>
                <td colSpan={7}>
                    <h1>No hay datos</h1>
                </td>
              </tr>
          }
        </tbody>
      </Table>
    </div>
  )
}