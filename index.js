//Carousel automatico

let carousel = document.querySelector("#slider");
let currentIndex = 1;

const slider = () => {
  carousel.style.backgroundImage = `url('/img/slides/s${currentIndex}.jpg')`;
  currentIndex = (currentIndex % 3) + 1;
};

setInterval(slider, 4000);

//Carousel proyecto

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;

  function showNextSlide() {
    slides[currentSlideIndex].classList.remove("z-50");
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add("z-50");
  }

  function showPreviousSlide() {
    slides[currentSlideIndex].classList.remove("z-50");
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add("z-50");
  }

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!startX) return;
    const currentX = event.touches[0].clientX;
    const diff = startX - currentX;
    if (diff > 0) {
      showNextSlide();
    } else {
      showPreviousSlide();
    }
    startX = null;
  }

  let startX;

  document
    .querySelector("#carousel")
    .addEventListener("touchstart", handleTouchStart);
  document
    .querySelector("#carousel")
    .addEventListener("touchmove", handleTouchMove);
});
