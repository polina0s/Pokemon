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
