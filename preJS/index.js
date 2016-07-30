

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

$(window).on("load",function() {
  $(window).scroll(function() {

      var scrollTop = $(window).scrollTop();
      var height = $(window).height();

      $('.sl-Banner_TextWrapper').css({
          'opacity': ((height - scrollTop) / height)
      });

    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        //if ($(this).css("opacity")==0.25) {$(this).fadeTo(500,1);}
        $(this).addClass('heyo');
      } else { //object goes out of view (scrolling up)
        //if ($(this).css("opacity")==1) {$(this).fadeTo(500,0.25);}
        $(this).removeClass('heyo');
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});
