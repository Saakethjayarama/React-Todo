<?php
  class JdbcUtil{
    public static function getConnection(){
        
        $host = "localhost:3306";

        
        $userName = "root";
        $password = "";
        $dbName = "todo";

        
        $connection = mysqli_connect($host, $userName, $password, $dbName);
        return $connection;

    }        
}
?>