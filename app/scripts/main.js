$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let windowHeight = $(window).height();
    let scrollBottom = scrollTop + windowHeight;
    let showDown = $('.showDown');
    let showLeft = $('.showLeft');
    let showRight = $('.showRight');
    showDown.each(function () {
        if(scrollBottom >= $(this).position().top){
            $(this).addClass('active');
        };
    });
    showLeft.each(function () {
        if(scrollBottom >= $(this).position().top){
            $(this).addClass('active');
        };
    });
    showRight.each(function () {
        if(scrollBottom >= $(this).position().top){
            $(this).addClass('active');
        };
    });
});
$(document).ready(function () {
    $('.openpopup').on('click',function (e) {
        e.preventDefault();
        $('.pop-up').addClass('open');
        $('body').addClass('no-scroll');
    });
    $('.pop-up__block__exit').on('click',function () {
        $('.pop-up').removeClass('open');
        $('body').removeClass('no-scroll');
    });
});