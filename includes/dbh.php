<?php

// se face conexiunea la baza de date
$servername = "localhost";
$username = "root";
$password = "Fucklove2002.";
$dbname = "uso";

$conn = new mysqli($servername, $username, $password, $dbname);

// se verifică dacă conexiunea a avut loc cu succes
if ($conn->connect_error) {
  die("Conexiunea a eșuat: " . $conn->connect_error);
}

// se verifică dacă butonul a fost apăsat
if(isset($_POST['name'])) {
  
  // se preiau datele din formular
  $name = $_POST['name'];
  $email = $_POST['email'];
  $options = $_POST['options'];
  
  // se creează interogarea SQL pentru inserarea datelor în baza de date
  $sql = "INSERT INTO users_registration (Nume, Email, Departament) VALUES ('$name', '$email', '$options')";
  
  // se verifică dacă interogarea a avut loc cu succes
  if ($conn->query($sql) === TRUE) {
    echo "Înregistrarea a fost adăugată cu succes în baza de date.";
  } else {
    echo "Eroare: " . $sql . "<br>" . $conn->error;
  }
  
  // se închide conexiunea cu baza de date
  $conn->close();
}
?>


