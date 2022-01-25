let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn');

let search = document.querySelector('.search-form');
let iconSearch = document.querySelector('#search-btn');

let cart = document.querySelector('.cart-container');
let iconCart = document.querySelector('#cart-btn');

let userData = document.querySelector('.user-data');
let iconUser = document.querySelector('#user-btn');

iconCart.addEventListener('click', () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
    userData.classList.remove('active');
})

iconSearch.addEventListener('click', () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
    userData.classList.remove('active');
})

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    userData.classList.remove('active');
})

iconUser.addEventListener('click', () => {
    userData.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
})
/*document.querySelector('#menu-btn').onClick = () => {
    alert("aqui")
    navbar.classList.toggle('active');
}*/