import { Modal } from "./components/modal/modal";

const CLASS_LIST = {
  OPEN: "popup--open",
  CLOSE: "popup--close",
};

const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const popup = document.querySelector("#popup");

function clickOpen(e) {
  e.preventDefault();
  popup.classList.remove(CLASS_LIST.CLOSE);
  popup.classList.add(CLASS_LIST.OPEN);
}

function clickClose(e) {
  e.preventDefault();
  popup.classList.remove(CLASS_LIST.OPEN);
  popup.classList.add(CLASS_LIST.CLOSE);
}

btnClose.addEventListener("click", clickClose);
btnOpen.addEventListener("click", clickOpen);

// const TIPO_LIST = {
//   OPEN: "pokedex__select-filter--open",
//   CLOSE: "pokedex__select-filter--close",
// };

// const tipo = document.querySelector("#tipo");
// const tipoFilter = document.querySelector("#tipoFilter");

// function toogle(e) {
//   function tipoOpen() {
//     tipoFilter.classList.remove(TIPO_LIST.CLOSE);
//     tipoFilter.classList.add(TIPO_LIST.OPEN);
//   }

//   function tipoClose() {
//     tipoFilter.classList.remove(TIPO_LIST.OPEN);
//     tipoFilter.classList.add(TIPO_LIST.CLOSE);
//   }

//   const isOpen = tipoFilter.classList.contains(TIPO_LIST.OPEN);

//   if (isOpen) {
//     tipoClose();
//   } else {
//     tipoOpen();
//   }
// }

// tipo.addEventListener("click", toogle);

function initCards() {
  const cardItems = document.querySelectorAll(".pokedex__card-item");

  const mainCard = document.querySelector("#charizard");

  cardItems.forEach((v) => {
    v.addEventListener("click", () => {
      mainCard.classList.add("modalCard--open");
    });

    mainCard.addEventListener("click", () => {
      mainCard.classList.remove("modalCard--open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  new Modal("tipo", "tipoFilter");
  new Modal("ataque", "ataqueFilter");
  new Modal("experiencia", "experienciaFilter");

  initCards();
});
