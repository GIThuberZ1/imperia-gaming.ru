document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
    loadSkins();
});

// Функция для загрузки пользователей
function loadUsers() {
    fetch('/api/users.php')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = ''; // Очистка списка перед добавлением новых пользователей
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user-item';
                userDiv.innerHTML = `
                    <h3>${user.username}</h3>
                    <p>Баланс: ${user.balance.toFixed(2)}</p>
                    <button onclick="deleteUser(${user.id})">Удалить пользователя</button>
                `;
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке пользователей:', error);
        });
}

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
                    <button onclick="deleteSkin(${skin.id})">Удалить скин</button>
                `;
                skinList.appendChild(skinDiv);
            });
        })
