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
