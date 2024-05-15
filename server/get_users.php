<?php
include 'db.php';  // Utilisation de la même connexion à la base de données

header('Content-Type: application/json');  // Spécifier le type de contenu retourné

$query = "SELECT id, email, role FROM users";
$result = $conn->query($query);

$users = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode(['success' => true, 'users' => $users]);
} else {
    echo json_encode(['success' => false, 'message' => 'Aucun utilisateur trouvé.']);
}

$conn->close();
?>
