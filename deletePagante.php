<?php

  $server = 'localhost';
  $username = 'root';
  $password = 'root';
  $dbName = 'HotelDB';

  $conn = new mysqli($server, $username, $password, $dbName);
  if ($conn -> connect_errno) {
  echo $conn -> connect_errno;
  return;
  }

  $id = $_POST["id"];
  $sql = "
  DELETE FROM paganti WHERE id = " . $id;

  $conn -> query($sql);

  $conn -> close();
?>
