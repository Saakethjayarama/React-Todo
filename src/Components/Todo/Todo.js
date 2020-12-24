import React from "react";
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

  return (
    <Alert variant="success">
      <Alert.Heading>{value.title}</Alert.Heading>
      <p>{value.description}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <div className={classes.root}>
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            onClick={() => {
              editTodo(value);
            }}
          >
            <EditIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={() => {
              deleteTodo(value.id);
            }}
          >
            <DeleteForeverIcon />
          </Fab>
        </div>
      </div>
    </Alert>
  );
}

export default Todo;
