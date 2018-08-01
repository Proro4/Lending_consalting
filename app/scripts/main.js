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