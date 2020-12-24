<?php
  include_once 'Todo.php';
  include_once 'TodoDao.php';

  class TodoDaoImpl implements TodoDao {
    function getTodos() {
      $connection = JdbcUtil::getConnection();
      $sql = "select * from todos";

      $resultSet = $connection->query($sql);

      $todos = [];
      if($resultSet->num_rows > 0) {
        while($row = $resultSet->fetch_assoc()) {
          $todos[] = new Todo($row['id'], $row['title'], $row['description'], $row['status'], $row['added_at']);
        }
      }

      $connection->close();
      return $todos;
    }

    function addTodo($todo) {
      $connection = JdbcUtil::getConnection();
      $sql = "insert into todos(title, description) values (?,?)";

      $title = $todo->getTitle();
      $description = $todo->getDescription();

      $statement = $connection->prepare($sql);
      $statement->prepare($sql);
      $statement->bind_param('ss', $title, $description);

      $statement->execute();
      $n = $connection->insert_id;


      $connection->close();
      return $n;
    }

    function editTodo($todo) {
      $connection = JdbcUtil::getConnection();
      $sql = "update todos set title = ?, description = ? where id = ?";

      $id = $todo->getId();
      $title = $todo->getTitle();
      $description = $todo->getDescription();

      $statement = $connection->prepare($sql);
      $statement->bind_param('ssi', $title, $description, $id);
      $statement->execute();

      $connection->close();
    }

    function deleteTodo($id) {
      $connection = JdbcUtil::getConnection();
      $sql = "delete from todos where id = ?";

      $statement = $connection->prepare($sql);
      $statement->bind_param('i', $id);

      $statement->execute();
      $connection->close();
    }

  }

?>