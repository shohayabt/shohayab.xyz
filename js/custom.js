// MOST USES VAR SECTION  START FROM HERE 

const header = document.getElementById("header");
var navBar = document.getElementById('nav-bar');
var mainMenu = document.querySelector('.main-menu');
var navBar = document.getElementById('nav-bar');
var mainMenu = document.querySelector('.main-menu');

// MOST USES VAR SECTION END HERE 


// MAIN-MENU FIXING START FORM HERE const header = document.getElementById("header");
window.addEventListener('scroll', function () {
    navBar.classList.remove('color'); // CHANGE THE COLOR OF THE NAV BUTTON ON SCROLL
    mainMenu.classList.remove('menuActiveResponsive'); //REMOVE NAV ITEMS ON SCROLL
    var scrolling = document.documentElement.scrollTop;
    if (scrolling > 30) {
        header.classList.add("headerActiveTop");
    }
    else {
        header.classList.remove("headerActiveTop");
    }
})
// MAIN-MENU FIXING END HERE 

// RESPONSIVE MENU JAVASCRIPT START FORM HERE 

navBar.addEventListener('click', function () {
    setTimeout(function () {
        navBar.classList.toggle('color');
        mainMenu.classList.toggle('menuActiveResponsive');
    }, 200)
})