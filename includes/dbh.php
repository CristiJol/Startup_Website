<?php

// se face conexiunea la baza de date
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "uso";

$conn = new mysqli($servername, $username, $password, $dbname);

// se verifică dacă conexiunea a avut loc cu succes
if ($conn->connect_error) {
  die("Conexiunea a eșuat: " . $conn->connect_error);
}

// se verifică dacă butonul a fost apăsat
if(isset($_POST['submitButton'])) {
  
  // se preiau datele din formular
  $name = $_POST['name'];
  $email = $_POST['email'];
  $options = implode(", ", $_POST['options']);
  
  // se creează interogarea SQL pentru inserarea datelor în baza de date
  $sql = "INSERT INTO users (Nume, Email, Departament) VALUES ('$name', '$email', '$options')";
  
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

<!-- se afișează formularul pentru utilizator -->
<div class="work-request--form">
  <form method="post">
    <div class="work-request--information">
      <div class="information-name">
        <input id="name" type="text" name="name" spellcheck="false">
        <label for="name">Nume</label>
      </div>
      <div class="information-email">
        <input id="email" type="email" name="email" spellcheck="false">
        <label for="email">Email</label>
      </div>
    </div>
    <div class="work-request--options">
      <h3>Opțiuni</h3>
      <input type="checkbox" name="options[]" value="opțiunea 1"> Opțiunea 1<br>
      <input type="checkbox" name="options[]" value="opțiunea 2"> Opțiunea 2<br>
      <input type="checkbox" name="options[]" value="opțiunea 3"> Opțiunea 3<br>
    </div>
    <input id="submitButton" type="submit" name="submitButton" value="Înscrie-te!">
  </form>
</div>
