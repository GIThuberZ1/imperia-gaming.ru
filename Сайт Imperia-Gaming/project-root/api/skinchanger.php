<?php
session_start();
include '../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $skin_id = $data['skin_id'];
    $user_id = $_SESSION['user_id'];

    $stmt = $pdo->prepare("UPDATE users SET current_skin = :skin_id WHERE id = :id");
    $stmt->execute(['skin_id' => $skin_id, 'id' => $user_id]);

    echo json_encode(['status' => 'success']);
}
?>
