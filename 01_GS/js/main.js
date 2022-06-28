$(function () {
    $('.news_slider').slick({
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        pauseOnFocus: false,
    });

    $('.news .container .xi-angle-up-thin').on('click', function () {
        $('.news_slider').slick('slickPrev')
    });
    $('.news .container .xi-angle-down-thin').on('click', function () {
        $('.news_slider').slick('slickNext')
    });

    $('.stock .stock_tit>i').on('click', function () {
        $('.stock').toggleClass('close')
    });
})