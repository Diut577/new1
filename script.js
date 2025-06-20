const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.classList.remove('show');
        // Позволяем анимации завершиться перед скрытием
        setTimeout(() => {
            if (!scrollToTopBtn.classList.contains('show')) {
                scrollToTopBtn.style.display = 'none';
            }
        }, 300);
    }
});

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





