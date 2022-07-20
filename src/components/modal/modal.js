export class Modal {
  /**
   * Класс модалок для открытия их по клику
   * @param {string} elId - id элемента, при клике на который будет открываться модалка
   * @param {string} modalId
   * @param {string | undefined} customModalOpenClass
   */
  constructor(elId, modalId, customModalOpenClass = "modal--open") {
    this.elId = elId;
    this.modaId = modalId;
    this.customModalOpenClass = customModalOpenClass;

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
    this.modal.classList.add(this.customModalOpenClass);
  }

  hideModal() {
    this.modal.classList.remove(this.customModalOpenClass);
  }

  toggleModal() {
    const isOpen = this.modal.classList.contains(this.customModalOpenClass);

    if (isOpen) {
      this.hideModal();
    } else {
      this.showModal();
    }
  }
}

export class FilterModal extends Modal {
  constructor(elId, modalId, customModalOpenClass, modalCloseButtonId) {
    super(elId, modalId, customModalOpenClass);

    this.modalCloseButtonId = modalCloseButtonId;
    this.modalCloseButton = document.getElementById(this.modalCloseButtonId);

    this.modalCloseButton.addEventListener("click", () => super.hideModal());

    console.log(this.modalCloseButton);
  }
}
