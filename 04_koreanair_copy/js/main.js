$(function () {
    // gnb 및 gnb반응형
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            //$('.gnb>ul>li>a').next().hide();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').stop().slideUp();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.gnb>ul ul').removeAttr('style');
    });

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on');
        $('.gnb>ul>li>a').next().stop().slideUp();
    })

    // 메인 슬라이더 시작
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: true,
        // useTransform: false,
    });

    $('.main_slider').on('afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.slide_util .slide_pager .current_index').text("0" + (c ? c + 1 : 1))
        $('.slide_util .slide_pager .bar_progress').addClass('on')
    });

    $('.main_slider').on('beforeChange', function () {
        $('.slide_util .slide_pager .bar_progress').removeClass('on')
    });

    // 메인 슬라이더 버튼
    $('.main_visual .slide_pager .prev').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.main_visual .slide_pager .next').on('click', function () {
        $('.main_slider').slick('slickNext')
    });

    //trip 슬라이더 시작
    $('.trip_slider').slick({
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
    });

    // trip 슬라이더 버튼
    $('.trip .slide_util .prev').on('click', function () {
        $('.trip_slider').slick('slickPrev')
    });
    $('.trip .slide_util .next').on('click', function () {
        $('.trip_slider').slick('slickNext')
    });
})