import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router';

import Exercice from './Compeducation/Exercice';

function Education() {
  const navigate = useNavigate();
  return (
    <div>
  
      
      
      <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
    <Nav.Link  onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link> 
      <Nav.Link  onClick={() => navigate("/etudeadistance")}>Etude à distance</Nav.Link>
     
      <Nav.Link className="navpsy" onClick={() => navigate("/languages")} > Languages</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Education