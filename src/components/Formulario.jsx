import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const Formulario = ({onChange ,onSubmit}) => {

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control 
                type="text"  
                name = "nombre" 
                placeholder="Nombre del Colaborador"
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                type="email"  
                name = "correo" 
                placeholder="Email del Colaborador"
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                type="number" 
                name = "edad" 
                min={1}
                max={100}
                placeholder="Edad del colaborador"
                onChange={onChange} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" 
                name = "cargo" 
                placeholder="Cargo del Colaborador" 
                onChange={onChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control type="tel" 
                name = "telefono" 
                placeholder="Telefono del Colaborador" 
                onChange={onChange}
                />
          </Form.Group>        
          <Button variant="primary" className="d-grid gap-2" type="summit" >Agregar Colaborador</Button>
        </Form>
    )
}