import { Modal, FilterModal } from "./components/modal/modal";

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

function initCards() {
  const cardItems = document.querySelectorAll(".pokedex__card-item");

  const mainCard = document.querySelector("#charizard");

  cardItems.forEach((v) => {
    v.addEventListener("click", () => {
      mainCard.classList.add("modalCard--open");
    });

    mainCard
      .querySelector(".modalCard__close")
      .addEventListener("click", () => {
        mainCard.classList.remove("modalCard--open");
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  new Modal("tipo", "tipoFilter");
  new Modal("ataque", "ataqueFilter");
  new Modal("experiencia", "experienciaFilter");

  new FilterModal(
    "mobileFilterButton",
    "mobileFilterWindow",
    "mobileFilter-wrapper--open",
    "filterClose"
  );

  initCards();
});
