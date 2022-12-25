import Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import './App.css';


function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id= "sing-in-form" className="text-center w-100">
         <img
         className='mb-4 Bootstrap-logo'
          src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'
          alt='Bootstrap'/>
          <h1 className='mb-3 fs-4 fw-normal'>Sign in</h1>
          <Form.Group controlId='sing-in-email-adderess'>
            <Form.Control type='email' size='lg' placeholder='Email adderess' autoComplete='username' className='position-relative' />
          </Form.Group>
          <Form.Group controlId='sing-in-password' className='mb-3'>
            <Form.Control type='password' size='lg' placeholder='password' autoComplete='current-password' className='position-relative'/>
          </Form.Group>
          <Form.Group controlId='remember me' className='d-flex justify-content-center'>
            <Form.Check label="Remember me "/>
          </Form.Group>
          <div className='d-grid'>
           <Button variant='primary' size='lg'>Sing in</Button>
          </div>
      </Form>

    </Container>
  );
}

export default App;
