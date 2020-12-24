import Header from "../Header";
import "./App.css";
import * as R from "react-bootstrap";
import TodoForm from "../TodoForm";

function App() {
  return (
    <div className="App">
      <Header />
      <R.Container fluid>
        <R.Row>
          <R.Col md={6} className="App__Todos">
            Todos goes here
          </R.Col>
          <R.Col md={6} className="App__TodoForm">
            <TodoForm />
          </R.Col>
        </R.Row>
      </R.Container>
    </div>
  );
}

export default App;
