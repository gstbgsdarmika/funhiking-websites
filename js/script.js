// Navbar
const nav = document.getElementById("nav");
window.addEventListener('scroll', function(){
    scrollposition = window.scrollY;
    if(scrollposition >= 60){
        nav.classList.add('navbar-color');
    } else if (scrollposition <= 60){
        nav.classList.remove('navbar-color');
    }
});

// Card scroll
const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 3,
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
    el: '.swiper-scrollbar',
},
});