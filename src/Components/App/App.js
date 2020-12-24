import Header from "../Header";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import TodoForm from "../TodoForm";
import Todo from "../Todo/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <Col md={6} className="App__Todos">
            <h4>Todos</h4>
            <Todo />
          </Col>
          <Col md={6} className="App__TodoForm">
            <TodoForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
