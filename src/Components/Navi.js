import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";

const Navi = () => {
const navigate = useNavigate();  
  return (
    <Navbar bg="monta" variant="dark">
      <Container>
        <Nav className="monta">
          <Nav.Link className="despsy" onClick={() => navigate("/psy")} >
            Psycologie
          </Nav.Link>
          <Nav.Link className="deseduc" onClick={() => navigate("/education")}>
            Education
          </Nav.Link>
          <Nav.Link className="desart" onClick={() => navigate("/arts")}>
            Arts
          </Nav.Link>
          <Nav.Link className="desaprop" onClick={() => navigate("/apropos")}>
            A propos
          </Nav.Link>
          <Nav.Link className="desaprop" onClick={() => navigate("/communicationn")}>
        communication
          </Nav.Link>
          
          
          <Nav.Link className="desss" onClick={() => navigate("/membre")}>
            Devenir membre
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navi;
