<?php
require 'vendor/autoload.php'; // Убедитесь, что вы установили библиотеку для работы с OpenID

use LightOpenID;

$openid = new LightOpenID('yourdomain.com');

if (!$openid->mode) {
    $openid->identity = 'https://steamcommunity.com/openid';
    header('Location: ' . $openid->authUrl());
} elseif ($openid->mode == 'cancel') {
    echo 'Отменено пользователем.';
} else {
    if ($openid->validate()) {
        $id = $openid->getAttributes()['openid_claimed_id'];
        // Здесь вы можете сохранить пользователя в базе данных или обновить
