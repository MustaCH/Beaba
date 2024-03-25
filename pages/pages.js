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
