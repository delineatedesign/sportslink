$(document).ready(function() {
  $('.nav-toggle').on('click', function() {
    event.preventDefault();
    $(this).toggleClass('active');
    $('body').attr('data-mobile-nav', $('body').attr('data-mobile-nav') == 'hidden' ? 'visible' : 'hidden')
  });
});
