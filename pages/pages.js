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

//COPY TO CLIPBOARD

let textCopied = document.getElementById("phone");

const CopyToClipBoard = () => {
  textCopied.addEventListener("click", function (event) {
    event.preventDefault();

    let textToCopy = textCopied.innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        let tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("hidden");
        setTimeout(() => {
          tooltip.classList.add("hidden");
        }, 2000);
      })
      .catch(function (err) {
        console.error("Error al intentar copiar el texto: ", err);
      });
  });
};

CopyToClipBoard();
