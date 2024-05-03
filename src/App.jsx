import './App.css'
import { Listado } from './components/Listado'
import {BaseColaboradores} from './data/BaseColaboradores'
import {Buscador} from './components/Buscador'
import {Formulario} from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

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
          <Listado BaseColaboradores={BaseColaboradores}/>
        </Col>
        <Col xs={10} lg={{ span: 4, offset: 1}} >
          <Formulario/>
        </Col>
      </Row>
    </Container>
  )
}

export default App