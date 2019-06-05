const hamburger = document.querySelector('.hamburgerMenu');
const menu = document.querySelector('.nav-menu');
hamburger.addEventListener("click",function(){
    menu.classList.toggle("menuActive");
})