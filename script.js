const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

burger.onclick = () => {
    navList.classList.toggle("inactive");
    burger.classList.toggle("pressed");
};

let mQuery = window.matchMedia('(min-width: 769px)');

if (mQuery.matches) {
    $('.slider').slick();
    navList.classList.remove("inactive");
}

function sliderSwitch() {
    if (mQuery.matches) {
        $('.slider').slick();
        navList.classList.remove("inactive");
    } else {
        $('.slider').slick('unslick');
        navList.classList.add("inactive");
    }
}

mQuery.addEventListener('change', sliderSwitch);
