$(window).load(function() {
  setTimeout(function(){
  $('.overlay').fadeOut(2000);
}, 0);
});

$('body').css({'width' : '100%','height': '100%'});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.center-heroWrapper').css({
        'opacity': ((height - scrollTop) / height)
    });
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
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
