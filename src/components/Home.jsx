import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Form className="d-flex flex-row justify-content-center my-4">
            <Form.Group >
              <Form.Control className="mr-5" type="text" placeholder="Enter city" />
            </Form.Group>
            <Button className="ml-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12}>
            test
        </Col>
      </Row>
    </Container>
  );
}
