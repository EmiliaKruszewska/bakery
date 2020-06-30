const burgerIcon = document.querySelector('.burger');
const topMenu = document.querySelector('.top-menu');
const backgroundMenuColor = document.querySelector('.bgc');

burgerIcon.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    topMenu.classList.toggle('active');
    backgroundMenuColor.classList.toggle('active');
})