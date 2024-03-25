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
loading();

if (sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")) {
  loader.classList.add("hidden");
  navbar.classList.add("z-50");
}
