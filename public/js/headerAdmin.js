let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})