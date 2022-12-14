(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-book-room-tbl]'),
    closeModalBtn: document.querySelector('[data-modal-close-book-room-tbl]'),
    modal: document.querySelector('[data-modal-book-room-tbl]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-room-price-tbl]'),
    closeModalBtn: document.querySelector('[data-modal-close-room-price-tbl]'),
    modal: document.querySelector('[data-modal-room-price-tbl]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
