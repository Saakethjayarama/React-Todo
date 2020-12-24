import React from "react";
import { Alert } from "react-bootstrap";
import "./Todo.css";

// material ui
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneIcon from "@material-ui/icons/Done";
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
function Todo() {
  const classes = useStyles();

  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>Aww yeah, you successfully read this important alert message.</p>
      <hr />
      <div className="d-flex justify-content-end">
        <div className={classes.root}>
          <Fab color="primary" aria-label="add" size="small">
            <DoneIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" size="small">
            <EditIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" size="small">
            <DeleteForeverIcon />
          </Fab>
        </div>
      </div>
    </Alert>
  );
}

export default Todo;
