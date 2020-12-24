<?php

  class Todo {

    private $id;
    private $title;
    private $description;
    private $status;
    private $addedAt;

    function __construct(
      $id,
      $title,
      $description,
      $status,
      $addedAt
    ) {
      $this->id = $id;
      $this->title = $title;
      $this->description = $description;
      $this->status = $status;
      $this->addedAt = $addedAt;
    }

    function getId() {
      return $this->id;
    }
    function getTitle() {
      return $this->title;
    }  
    function getDescription() {
      return $this->description;
    }  
    function getStatus() {
      return $this->status;
    }  
    function getAddedAt() {
      return $this->addedAt;
    }

    function setId($id) {
      $this->id = $id;
    }
    function setTitle($title) {
      $this->title = $title;
    }
    function setDescription($description) {
      $this->description = $description;
    }
    function setStatus($status) {
      $this->status = $status;
    }
    function setAddedAt($addedAt) {
      $this->addedAt = $addedAt;
    }

    function toArray() {
      return array(
        "id" => $this->id,
        "title" => $this->title,
        "description" => $this->description,
        "status" => $this->status,
        "addedAt" => $this->addedAt
      );
    }

  }

?>