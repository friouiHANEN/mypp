import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import Apropos from './Apropos';

const Psyco = () => {
  const navigate = useNavigate();
  return (
    
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link className="navpsy" onClick={() => navigate("/aboutus")}>About Us</Nav.Link>
      <Nav.Link className="navpsy" onClick={() => navigate("/solution")} > problems</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
    
    </div>
  )
}

export default Psyco