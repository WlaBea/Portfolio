const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is_active');
    menu.classList.toggle('show');
});

menu.addEventListener('click', function() {
    menu.classList.toggle('show');
    hamburger.classList.toggle('is_active');
});