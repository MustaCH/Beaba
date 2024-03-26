let loader = document.querySelector("#loader");
let navbar = document.querySelector("#navbar");

const loading = () => {
  setTimeout(() => {
    loader.classList.add("fade-out");
    navbar.classList.add("z-50", "fade-in");
  }, 4000);
};

//Carousel automatico

let carousel = document.querySelector("#slider");
let currentIndex = 1;

const slider = () => {
  carousel.style.backgroundImage = `url('/img/slides/s${currentIndex}.jpg')`;
  currentIndex = (currentIndex % 3) + 1;
};

setInterval(slider, 4000);

if (sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")) {
  loader.classList.add("hidden");
  navbar.classList.add("z-50");
} else {
  loading();
}

//NAV-MOBILE

let dropdown = document.querySelector("#dropdown");
let toggleMenu = document.querySelector("#toggle-menu");
let closeMenu = document.querySelector("#close-menu");

const OpenSidebar = () => {
  dropdown.classList.add("scale-100", "transition-transform", "duration-150");

  toggleMenu.classList.add("opacity-0", "transition-opacity", "duration-150");
  closeMenu.classList.remove("hidden");
};

const CloseSidebar = () => {
  dropdown.classList.remove("scale-100");
  toggleMenu.classList.remove("opacity-0");
  closeMenu.classList.add("hidden");
};
