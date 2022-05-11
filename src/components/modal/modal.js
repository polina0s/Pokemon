export class Modal {
  constructor(elId, modalId) {
    this.elId = elId;
    this.modaId = modalId;

    this.element = document.getElementById(this.elId);
    this.modal = document.getElementById(this.modaId);

    this.toggleModal = this.toggleModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.element.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleModal();
    });
  }

  showModal() {
    this.modal.classList.add("modal--open");
  }

  hideModal() {
    this.modal.classList.remove("modal--open");
  }

  toggleModal() {
    const isOpen = this.modal.classList.contains("modal--open");

    if (isOpen) {
      this.hideModal();
    } else {
      this.showModal();
    }
  }
}
