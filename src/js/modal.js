(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-book-table]'),
    closeModalBtn: document.querySelector('[data-modal-close-book-table]'),
    modal: document.querySelector('[data-modal-book-table]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-book-room]'),
    closeModalBtn: document.querySelector('[data-modal-close-book-room]'),
    modal: document.querySelector('[data-modal-book-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-room-price]'),
    closeModalBtn: document.querySelector('[data-modal-close-room-price]'),
    modal: document.querySelector('[data-modal-room-price]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();