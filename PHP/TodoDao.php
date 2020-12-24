<?php

  interface TodoDao {
    function getTodos();
    function addTodo($todo);
    function editTodo($todo);
    function deleteTodo($id);
    function changeStatus($id, $status);
  }

?>