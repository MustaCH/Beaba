let loader = document.querySelector("#loader");

const loading = () => {
  setTimeout(() => {
    loader.classList.add("fade-out");
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
