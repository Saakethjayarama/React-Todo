import Header from "../Header";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import TodoForm from "../TodoForm";
import Todo from "../Todo/Todo";
import { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function App() {
  // handling form states here

  const INITIAL_STATE = {
    id: "",
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

    if (isAddition) {
      fetch("http://localhost/add.php", {
        method: "POST",
        body: JSON.stringify(state),
      }).then(() => {
        setState(INITIAL_STATE);
        setTrigger(Math.random());
        setIsAddition(true);
      });
    } else {
      fetch("http://localhost/edit.php", {
        method: "PUT",
        body: JSON.stringify(state),
      }).then(() => {
        setState(INITIAL_STATE);
        setTrigger(Math.random());
        setIsAddition(true);
      });
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost/delete.php?id=${id}`, {
      method: "DELETE",
    }).then(() => {
      setTrigger(Math.random());
    });
  };

  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(true);
  const [trigger, setTrigger] = useState(null);

  const clear = () => {
    setState(INITIAL_STATE);
    setIsAddition(true);
  };

  useEffect(() => {
    setActive(true);
    fetch("http://localhost/todos.php")
      .then((res) => res.json())
      .then((data) => {
        if (active) {
          setTodos(data);
        }
      });
    return () => {
      setActive(false);
    };
  }, [trigger]);

  // handle todo

  const [isAddition, setIsAddition] = useState(true);

  const editTodo = (data) => {
    console.log("data");
    setIsAddition(false);
    setState(data);
  };

  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <Col md={6} className="App__Todos">
            <h4>Todos</h4>
            {todos.map((value, index) => {
              return (
                <Todo
                  editTodo={editTodo}
                  key={index}
                  value={value}
                  deleteTodo={handleDelete}
                />
              );
            })}
          </Col>
          <Col md={6} className="App__TodoForm">
            <TodoForm
              state={state}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              clear={clear}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
