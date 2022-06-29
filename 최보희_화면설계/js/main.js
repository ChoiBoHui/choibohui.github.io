$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnFocus: false,
    });

    $('.main_visual .pause').on('click', function () {
        $('.main_visual .pause').toggleClass('play')
    });

    $('.main_visual .pause').click(function () {
        if ($(this).html() == 'pause') {
            $('.main_slider').slick('slickPause')
            $(this).html('play')
        } else {
            $('.main_slider').slick('slickPlay')
            $(this).html('pause')
        }
    });

    $('.main_visual .prev').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.main_visual .next').on('click', function () {
        $('.main_slider').slick('slickNext')
    });
    // main_visual End

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
    // news End

    $('.stock .stock_tit>i').on('click', function () {
        $('.stock').toggleClass('close')
    });
    // stock End

    $('.tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.tab_content>li').removeClass('on');
        $('.tab_content>li').eq(idx).addClass('on');
        $('.tab_menu>li').removeClass('on');
        $(this).parent().addClass('on');
    });
    // business End
})