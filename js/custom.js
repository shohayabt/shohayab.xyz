// $('..background-slider').slick({
//     rtl: true
//   });
      


// MAIN-MENU FIXING START FORM HERE 
const header = document.getElementById("header");
var navBar = document.getElementById('nav-bar');
var mainMenu = document.querySelector('.main-menu');
window.addEventListener('scroll',function(){
    navBar.classList.remove('color');
    mainMenu.classList.remove('menuActiveResponsive');
    var scrolling = document.documentElement.scrollTop;
    if(scrolling>30)
    {
        header.classList.add("headerActiveTop");
    }
    else{
        header.classList.remove("headerActiveTop");
    }
})
// MAIN-MENU FIXING END HERE 

// RESPONSIVE MENU JAVASCRIPT START FORM HERE 

navBar.addEventListener('click',function(){
    navBar.classList.toggle('color');
    mainMenu.classList.toggle('menuActiveResponsive');
})