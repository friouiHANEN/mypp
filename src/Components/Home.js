import React from "react";
import { Form, Button } from "react-bootstrap";

//import Image from "./mo5.jpg";

const Home = () => {
  return (
    <div className="secon">
      <Form className="design-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom Complet</Form.Label>
          <Form.Control type="text" placeholder="Nom Complet" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse e-mail</Form.Label>
          <Form.Control type="email" placeholder="Adresse e-mail" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe </Form.Label>
          <Form.Control type="password" placeholder="mot de passe" />
        </Form.Group>

        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Student"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Teacher"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                name="group1"
                label="Psychologist"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="J'accepte tous les conditions " />
        </Form.Group>
        <Button className="dessuiv" variant="primary" type="submit">
          Suivant
        </Button>
      </Form>
    </div>
  );
};

export default Home;
