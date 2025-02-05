document.addEventListener('DOMContentLoaded', function() {
    // Загрузка скинов при загрузке страницы
    loadSkins();

    // Обработчик для формы аутентификации
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            authenticateUser();
        });
    }
});

// Функция для загрузки скинов
function loadSkins() {
    fetch('/api/skins.php')
        .then(response => response.json())
        .then(skins => {
            const skinList = document.getElementById('skin-list');
            skinList.innerHTML = ''; // Очистка списка перед добавлением новых скинов
            skins.forEach(skin => {
                const skinDiv = document.createElement('div');
                skinDiv.className = 'skin-item';
                skinDiv.innerHTML = `
                    <h3>${skin.skin_name}</h3>
                    <p>Цена: ${skin.price.toFixed(2)}</p>
                    <button onclick="changeSkin('${skin.skin_id}')">Выбрать</button>
                `;
                skinList.appendChild(skinDiv);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке скинов:', error);
        });
}

// Функция для изменения скина
function changeSkin(skinId) {
    fetch('/api/skinchanger.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skin_id: skinId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Скин успешно изменен!');
        } else {
            alert('Ошибка при изменении скина.');
        }
    })
    .catch(error => {
        console.error('Ошибка при изменении скина:', error);
    });
}

// Функция для аутентификации пользователя
function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/auth.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Успешный вход!');
            window.location.href = '/public/index.html'; // Перенаправление на главную страницу
        } else {
            alert('Ошибка входа: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Ошибка при аутентификации:', error);
    });
}
