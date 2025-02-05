<?php
session_start();
include '../config/database.php';

$user_id = $_SESSION['user_id'];
$stmt = $pdo->prepare("SELECT balance FROM users WHERE id = :id");
$stmt->execute(['id' => $user_id]);
$balance = $stmt->fetchColumn();

echo json_encode(['balance' => $balance]);
?>
