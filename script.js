const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon-img');

// Проверяем сохраненную тему, по умолчанию темная
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.src = 'light.png';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeIcon.src = 'light.png';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.src = 'dark.png';
        localStorage.setItem('theme', 'light');
    }
});
