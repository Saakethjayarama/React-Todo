<?php
  include_once 'Todo.php';
  include_once 'TodoDaoImpl.php';

  $tdi = new TodoDaoImpl();
  
  $todo = new Todo(2, 'Drink', 'Hydrating is very essenstial for health', null, null);
  // $tdi->addTodo($todo);

  // print_r($tdi->getTodos());

  // $tdi->editTodo($todo);

  // $tdi->deleteTodo(1);



  echo 'Done';
?>