function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.form').forEach(form => {
        form.classList.remove('active');
    });

    document.querySelector(`.tab[onclick="switchTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}-form`).classList.add('active');
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');

    if (!username.endsWith('@gmail.com')) {
        error.textContent = 'Вход доступ только с Gmail';
        return;
    }
    const savedUser = localStorage.getItem('registeredUsername');
    const savedPass = localStorage.getItem('registeredPassword');

    if (username === savedUser && password === savedPass) {
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('currentUser', username);
        window.location.href = 'index3.html';
    } else {
        errorElement.textContent = 'Неверный логин или пароль';
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-password-confirm').value;
    const errorElement = document.getElementById('register-error');

    if (!username.endsWith('@gmail.com')) {
        errorElement.textContent = 'Регистрация доступна только с Gmail';
        return;
    }

    if (password !== confirmPassword) {
        errorElement.textContent = 'Пароли не совпадают';
        return;
    }

    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);

    if (username && password) {
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('currentUser', username);
        window.location.href = 'index3.html';
    } else {
        errorElement.textContent = 'Пожалуйста, заполните все поля';
    }
}