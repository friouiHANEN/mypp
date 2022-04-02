import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, useNavigate } from 'react-router'
import Education from '../Education'



const Exercice = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Education />
      <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="navii">
      <Nav.Link  className="nav-exercice" onClick={() => navigate("/etudeadistance")}>kindergarten</Nav.Link>
      <Nav.Link className="nav-exercice" onClick={() => navigate("/exercice")} > school pupils</Nav.Link>
      <Nav.Link className="nav-exercice" onClick={()=> navigate("/examens")} > middle school </Nav.Link>
      <Nav.Link className="nav-exercice" onClick={() => navigate("/debates")} > secondary</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
        <h1>hsjqhqsqj</h1>
    </div>
  )
}

export default Exercice
