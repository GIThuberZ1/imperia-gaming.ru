<?php
session_start();
include '../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $amount = $data['amount'];
    $user_id = $_SESSION['user_id'];

    $stmt = $pdo->prepare("UPDATE users SET balance = balance + :amount WHERE id = :id");
    $stmt->execute(['amount' => $amount, 'id' => $user_id]);

    echo json_encode(['status' => 'success']);
}
?>
