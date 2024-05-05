import './App.css'
import { useState } from 'react';
import { Listado } from './components/Listado'
import {BaseColaboradores} from './data/BaseColaboradores'
import {Buscador} from './components/Buscador'
import {Formulario} from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const [data, setData] = useState (BaseColaboradores);
  const [nuevoColaborador,setColaborador] = useState (
    {
      id: '',
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    }
  );

  const capturaInput = (event) => {
    const {name,value} = event.target;
    console.log ("Estoy ingresando los inputs")

    setColaborador ({
      ...nuevoColaborador,
        [name]: value,
    })

    console.log (nuevoColaborador)
  }

  const AgregarNuevoColaborador = (event) => {
    console.log ("Entre en funcion nuevo colaborador")
    event.preventDefault();
    const id = data.length + 1;
    const { nombre, correo, edad, cargo, telefono } = event.target;
    if(
        !nombre.value ||
        !correo.value ||
        !edad.value ||
        !cargo.value ||
        !telefono.value
    ) {
      console.log ("No se permiten campos vacios")
    } else {
      const newObj = {
        id,
        nombre: nombre.value,
        correo: correo.value,
        edad: edad.value,
        cargo:cargo.value,
        telefono: telefono.value,
      }
      
      console.log(newObj , "Nuevo objeto")
      AgregarUsuario(newObj)

      nombre.value = ''
      correo.value = ''
      edad.value = ''
      cargo.value = ''
      telefono.value = ''
    }
  }

  const AgregarUsuario = (nuevoUsuario) => {
    setData([...data,nuevoUsuario])    
  };

  const Buscar = () => {
    console.log ("hola")
  }

  return (
    <Container className='mt-4 center'>
          <h1>Lista de Colaboradores</h1>
      <Row >
        <Col  lg={7} xs={10} sm={12}>
          <Buscador />
        </Col>
      </Row>
      <Row className='mt-4 d-flex justify-content-center'>
        <Col  lg={7}>
          <Listado usuario = {data}/>
        </Col>
        <Col xs={10} lg={{ span: 4, offset: 1}} >
        <Formulario onChange={capturaInput} onSubmit={AgregarNuevoColaborador}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App