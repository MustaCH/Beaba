//Carousel

let carousel = document.querySelector("#slider");
let currentIndex = 1;

const slider = () => {
  carousel.classList.remove(
    `bg-[url('/img/slides-home/s${currentIndex}.jpg')]`
  );
  currentIndex = (currentIndex % 4) + 1;
  carousel.classList.add(`bg-[url('/img/slides-home/s${currentIndex}.jpg')]`);
};

setInterval(slider, 5000);
