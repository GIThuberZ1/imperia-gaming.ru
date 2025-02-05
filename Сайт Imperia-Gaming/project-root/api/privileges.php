<?php
session_start();
include '../config/database.php';

$user_id = $_SESSION['user_id'];
$stmt = $pdo->prepare("SELECT privileges FROM users WHERE id = :id");
$stmt->execute(['id' => $user_id]);
$privileges = $stmt->fetchColumn();

echo json_encode(['privileges' => $privileges]);
?>
