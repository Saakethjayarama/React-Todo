<?php
    include_once 'Todo.php';
    include_once 'TodoDaoImpl.php';

    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    
    $method = $_SERVER['REQUEST_METHOD'];

    if($method == 'OPTIONS'){
        http_response_code(200);
    }else
    if($method == 'POST') {
      $data = json_decode(file_get_contents('php://input'), true);
      
      $tdi = new TodoDaoImpl();
      
      $todo = new Todo(null, $data['title'], $data['description'], null, null);
      $id = $tdi->addTodo($todo);
      $todo->setId($id);
      
      http_response_code(200);
      echo json_encode($todo->toArray());
    }else{
        http_response_code(405);
        echo (json_encode(array("message"=>"method not allowed")));
    }
    
?>