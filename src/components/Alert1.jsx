import Alert from 'react-bootstrap/Alert';


export const Alert1 = ({Alerts}) => {
  return (
    <Alert className='text-center mt-3' variant={Alerts.vrt}>
         {Alerts.msg}
    </Alert>
  )
}



