import React from "react";
import "./TodoForm.css";
// bootstrap
import { Form, Button } from "react-bootstrap";

function TodoForm() {
  return (
    <div className="TodoForm">
      <div className="TodoForm__title">Todo</div>
      <div className="TodoForm__form">
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Form.Group controlId="dt">
            <Form.Label>Date and Time</Form.Label>
            <Form.Control type="datetime-local" />
          </Form.Group>
          <Button variant="primary" type="submit" className="float-right">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default TodoForm;
