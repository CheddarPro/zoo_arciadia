<?php
// db.php
$servername = "localhost";
$username = "Ched";  // Remplacez par votre nom d'utilisateur MySQL
$password = getenv('DB_PASSWORD');  // Utilisez des variables d'environnement pour stocker les mots de passe
$dbname = "zoo_arcadia";  // Remplacez par le nom de votre base de données

// Création de la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
