const themeToggle = document.querySelector('#theme');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; 
}else{
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    let theme = 'dark';
    
    if (body.classList.contains('light-mode')) {
        theme = 'light';
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    
    localStorage.setItem('theme', theme);
});


//active link switcher
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    
    menuIcon.classList.toggle('bx-x');
};
// كود الفلترة لصفحة الأخبار
const filterButtons = document.querySelectorAll('.filter-btn');
if(filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            const items = document.querySelectorAll('.news-item');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}
