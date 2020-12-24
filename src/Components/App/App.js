import Header from "../Header";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import TodoForm from "../TodoForm";
import Todo from "../Todo/Todo";
import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function App() {
  // handling form states here

  const INITIAL_STATE = {
    title: "",
    description: "",
    dateTime: "",
  };

  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
      <Header />
      <div className="App__fab">
        <Fab
          color="secondary"
          aria-label="add"
          onClick={() => {
            setState(INITIAL_STATE);
          }}
          style={{ zIndex: 5 }}
        >
          <AddIcon />
        </Fab>
      </div>
      <Container fluid>
        <Row>
          <Col md={6} className="App__Todos">
            <h4>Todos</h4>
            <Todo />
          </Col>
          <Col md={6} className="App__TodoForm">
            <TodoForm
              state={state}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
