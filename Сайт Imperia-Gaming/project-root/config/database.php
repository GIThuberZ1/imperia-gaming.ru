<?php
$host = '193.19.119.127'; // Хост базы данных
$db = 'gs32696'; // Имя базы данных
$user = 'gs32696'; // Имя пользователя
$pass = 'BD71uM0Fv6'; // Пароль

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Ошибка подключения: " . $e->getMessage();
}
?>
