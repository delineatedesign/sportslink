$(document).ready(function() {
  $('.nav-toggle').on('click', function() {
    event.preventDefault();
    $(this).toggleClass('active');
    //$('.right ul').toggleClass("sl-Nav-hidden");
  });
});
