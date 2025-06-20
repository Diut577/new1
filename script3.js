// Отображаем имя пользователя
document.addEventListener('DOMContentLoaded', function () {
    const username = sessionStorage.getItem('currentUser');
    if (username) {
        document.querySelector('h1').textContent += `, ${username}!`;
    }
});

// Функция выхода
function logout() {
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index2.html';
}

// Генерация календаря
function generateCalendarDays() {
    const calendarDays = document.getElementById('calendar-days');
    const today = new Date();
    const currentDay = today.getDate();
    const daysInMonth = 30; // Фиксированное количество дней

    calendarDays.innerHTML = '';

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';

        if (i === currentDay) {
            dayElement.classList.add('today');
        }

        // Случайные маркеры для демонстрации
        const markers = [];
        if (Math.random() > 0.3) markers.push('daily');
        if (i % 7 === 0) markers.push('weekly');
        if (i === 7 || i === 15 || i === 30) markers.push('special');

        dayElement.innerHTML = `
                        <div class="day-number">${i}</div>
                        <div class="event-markers">
                            ${markers.map(type =>
            `<span class="event-marker ${type}"></span>`
        ).join('')}
                        </div>
                    `;

        calendarDays.appendChild(dayElement);
    }
}

// Скролл к элементу
function scrollToElement(element) {
    const container = document.querySelector('.calendar-scroll-container');
    const containerWidth = container.offsetWidth;
    const elementLeft = element.offsetLeft;
    const elementWidth = element.offsetWidth;

    container.scrollTo({
        left: elementLeft - (containerWidth / 2) + (elementWidth / 2),
        behavior: 'smooth'
    });
}

// Инициализация календаря
generateCalendarDays();

// Обработчики кнопок
document.getElementById('prev-btn').addEventListener('click', function () {
    const container = document.querySelector('.calendar-scroll-container');
    container.scrollBy({ left: -200, behavior: 'smooth' });
});

document.getElementById('next-btn').addEventListener('click', function () {
    const container = document.querySelector('.calendar-scroll-container');
    container.scrollBy({ left: 200, behavior: 'smooth' });
});

document.getElementById('today-btn').addEventListener('click', function () {
    const todayElement = document.querySelector('.today');
    if (todayElement) {
        scrollToElement(todayElement);
    }
});

