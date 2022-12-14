 (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-book-room-dbl]'),
      closeModalBtn: document.querySelector('[data-modal-close-book-room-dbl]'),
      modal: document.querySelector('[data-modal-book-room-dbl]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-room-price-dbl]'),
      closeModalBtn: document.querySelector('[data-modal-close-room-price-dbl]'),
      modal: document.querySelector('[data-modal-room-price-dbl]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
