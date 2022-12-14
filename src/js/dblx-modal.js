  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-book-room-dblx]'),
      closeModalBtn: document.querySelector('[data-modal-close-book-room-dblx]'),
      modal: document.querySelector('[data-modal-book-room-dblx]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  
  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-room-price-dblx]'),
      closeModalBtn: document.querySelector('[data-modal-close-room-price-dblx]'),
      modal: document.querySelector('[data-modal-room-price-dblx]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

