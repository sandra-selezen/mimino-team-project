(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-book-room-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-book-room-2]'),
    modal: document.querySelector('[data-modal-book-room-2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();