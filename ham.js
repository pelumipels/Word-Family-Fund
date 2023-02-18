// Hamburger and MenuBar For Mobile Devices JavaScript

const ham = document.querySelector('header .nav-bar .ham');
const nav = document.querySelector('header .nav-bar nav');
const nav2 = document.querySelectorAll('header .nav-bar nav a');

ham.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle');
    ham.classList.toggle('close');
});

nav2.forEach((item) => {
    item.addEventListener('click', () => {
        nav.classList.toggle('nav-toggle');
        ham.classList.toggle('close');
    });
});

// End Of Hamburger and MenuBar For Mobile Devices JavaScript