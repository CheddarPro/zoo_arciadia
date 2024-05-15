<?php
session_start();
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "zoo";

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $role = $_POST['role'];

    // Hash du mot de passe
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Requête pour insérer un nouvel utilisateur
    $stmt = $conn->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $hashedPassword, $role);

    if ($stmt->execute()) {
        echo "User created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
