import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import "./Todo.css";

// material ui
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  };
});
function Todo(props) {
  const classes = useStyles();
  const { editTodo, value, deleteTodo } = props;

  const INITIAL_STATE = {
    id: "",
    title: "",
    description: "",
    dateTime: "",
  };

  const [state, setState] = useState(INITIAL_STATE);
  useEffect(() => {
    setState(value);
  }, [value]);

  const handleChange = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      isChecked = 1;
    } else {
      isChecked = 0;
    }
    fetch(`http://localhost/status.php?id=${state.id}&status=${isChecked}`, {
      method: "PUT",
    }).then(() => {
      setState({
        ...state,
        status: isChecked,
      });
    });
  };

  return (
    <Alert variant="success">
      <Alert.Heading>
        {state.status == 0 ? state.title : <strike>{state.title}</strike>}
      </Alert.Heading>
      <p>{state.description}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <div className={classes.root}>
          <div className="actions">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={state.status == 1}
            />
            <Fab
              color="primary"
              aria-label="edit"
              size="small"
              onClick={() => {
                editTodo(state);
              }}
            >
              <EditIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="edit"
              size="small"
              onClick={() => {
                deleteTodo(state.id);
              }}
            >
              <DeleteForeverIcon />
            </Fab>
          </div>
        </div>
      </div>
    </Alert>
  );
}

export default Todo;
