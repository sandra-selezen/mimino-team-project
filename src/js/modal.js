// OPEN MODAL"room-price"

$('.js-open-modal').click(function () {
  var modalName = $(this).attr('data-modal');
  var modal = $('.js-modal[data-modal="' + modalName + '"]');

  modal.addClass('is-show');
  $('.js-backdrop').addClass('is-show');
});

// CLOSE MODAL - CLICK IN BUTTON(x)

$('.js-modal-close').click(function () {
  $(this).parent('.js-modal').removeClass('is-show');
  $('.js-backdrop').removeClass('is-show');
});


// $('.js-backdrop').click(function () {
//   $('.js-modal.is-show').removeClass('is-show');
//   $(this).removeClass('is-show');
// });

// OPEN MODAL "book-room"

$('.js-open-modal1').click(function () {
  var modalName = $(this).attr('data-modal');
  var modal = $('.js-modal1[data-modal="' + modalName + '"]');

  modal.addClass('is-show');
  $('.js-backdrop1').addClass('is-show');
});

// CLOSE MODAL - CLICK IN BUTTON(x)

$('.js-modal-close1').click(function () {
  $(this).parent('.js-modal1').removeClass('is-show');
  $('.js-backdrop1').removeClass('is-show');
});

// OPEN MODAL "book-table"

$('.js-open-modal2').click(function () {
  var modalName = $(this).attr('data-modal');
  var modal = $('.js-modal2[data-modal="' + modalName + '"]');

  modal.addClass('is-show');
  $('.js-backdrop2').addClass('is-show');
});

// CLOSE MODAL - CLICK IN BUTTON(x)

$('.js-modal-close2').click(function () {
  $(this).parent('.js-modal2').removeClass('is-show');
  $('.js-backdrop2').removeClass('is-show');
});
