const menuBtn = document.querySelector('.ham-menu');
const menuSidebar = document.querySelector('.menu-sidebar');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');



menuBtn.addEventListener('click', () => {
    menuSidebar.classList.toggle('show');
    overlay.classList.toggle('active'); 
    body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', () => {
    menuSidebar.classList.remove('show');
    overlay.classList.remove('active'); 
});