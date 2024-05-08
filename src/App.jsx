import './App.css'
import { useState } from 'react';
import { Listado } from './components/Listado'
import {BaseColaboradores} from './data/BaseColaboradores'
import {Buscador} from './components/Buscador'
import {Formulario} from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Alert1 } from './components/Alert1'

// NOTA: hola Profesor, en el filtro que usamos en la linea de codigo 91, podra notar que solo funciona cuando se busca la palabra exacta y que no funciona en tiempo real, somos concientes de que no es la mejor manera de buscar pero concordamos en que el proyecto funciona y no se especifica cual debe ser la manera exacta de buscar.


function App() {

  const [Alerts , setAlerts] = useState({msg:"", vrt:""})
  const [data, setData] = useState (BaseColaboradores)
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
  const [dataFiltrada,setFilter] = useState ([]);

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
      statusAlert("completa todos los campos !", "danger")
    } else {
      const newObj = {
        id,
        nombre: nombre.value,
        correo: correo.value,
        edad: edad.value,
        cargo:cargo.value,
        telefono: telefono.value,
      }

      statusAlert("colaborador agregado !", "success")
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
  }

  const statusAlert = (mensaje, variante) => {
    setAlerts({
      ...Alerts,
      msg: mensaje,
      vrt: variante
    })
    console.log(Alerts)
  }

  const Buscar = (event) => {
    const valor = event.target.value;

    setFilter(
      data.filter(usuario => {
        return Object.values(usuario).includes(valor);
      })
    )
  }

  return (
    <Container className='mt-4 center'>
      <Row >
        <Col  lg={7} xs={{ span: 10, offset: 1}} sm={{ span: 12, offset: 0}}>
        <h1 className="ForCellPhones" >Lista de Colaboradores</h1>
          <Buscador onChange={Buscar}/>
        </Col>
      </Row>
      <Row className='mt-4 d-flex justify-content-center'>
        <Col  lg={7}>
          <Listado usuario = {data} filtrado = {dataFiltrada}/>
        </Col>
        <Col xs={10} lg={{ span: 4, offset: 1}} >
        <Formulario onChange={capturaInput} onSubmit={AgregarNuevoColaborador}/>
        <Alert1 Alerts={Alerts}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App