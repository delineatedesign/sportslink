/* fade out black cricle header banner on scroll */

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.sl-Banner_TextWrapper').css({
        'opacity': ((height - scrollTop) / height)
    });
});

$(document).ready(function() {

    /* smooth scroll to anchor */

    $(function() {
      $('a[href*="#"]:not([href="#"])').on('click', function() {
        $('body').attr('data-mobile-nav','hidden');
        $('.nav-toggle').removeClass('active');

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Footer form */

    if($('#element_0_0').is(':checked')) {
        $('.uploadcv-footer-heading').css('opacity','.25');
        $('.contactus-footer-heading').css('opacity','1');
    }

     $('#element_0_0').click(function() {
       if($('#element_0_0').is(':checked')) {
           $('.uploadcv-footer-heading').css('opacity','.25');
           $('.contactus-footer-heading').css('opacity','1');
        }
    });

    $('#element_0_1').click(function() {
        if($('#element_0_1').is(':checked')) {
            $('.uploadcv-footer-heading').css('opacity','1');
            $('.contactus-footer-heading').css('opacity','.25');
         }
     });

});
