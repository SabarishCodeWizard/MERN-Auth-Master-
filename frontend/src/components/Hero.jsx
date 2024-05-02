import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>TAC Portal</h1>
          <p className='text-center mb-4'>
        <b> Welcome to the TAC Portal, your centralized platform for managing student email IDs at Bannari Amman Institute of Technology. This portal streamlines administrative tasks, enhances accountability, and provides students with access to their email ID history.</b> 
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
