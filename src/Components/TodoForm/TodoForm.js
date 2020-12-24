import React from "react";
import "./TodoForm.css";
// bootstrap
import { Form, Button } from "react-bootstrap";

function TodoForm(props) {
  const state = props.state;
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;

  return (
    <div className="TodoForm">
      <div className="TodoForm__title">Todo</div>
      <div className="TodoForm__form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={handleChange}
              value={state.title}
            />
          </Form.Group>
          <Form.Group controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={4}
              onChange={handleChange}
              value={state.description}
            />
          </Form.Group>
          <Form.Group controlId="dt">
            <Form.Label>Date and Time</Form.Label>
            <Form.Control
              type="datetime-local"
              name="dateTime"
              onChange={handleChange}
              value={state.dateTime}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="float-right"
            style={{ marginLeft: "10px" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default TodoForm;
