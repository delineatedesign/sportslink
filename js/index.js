$('body').css({'width' : '100%','height': '100%'});

$('.nav').css('display', 'block');




$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.center-heroWrapper').css({
        'opacity': ((height - scrollTop) / height)
    });
});
