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
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Requête pour vérifier les identifiants
    $stmt = $conn->prepare("SELECT role FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->bind_result($role);
    $stmt->fetch();
    $stmt->close();
    $conn->close();

    if ($role) {
        // Stocker le rôle dans la session
        $_SESSION['role'] = $role;
        header("Location: /" . $role . ".html");
        exit();
    } else {
        header("Location: /index.html?error=invalid_credentials");
        exit();
    }
}
?>
