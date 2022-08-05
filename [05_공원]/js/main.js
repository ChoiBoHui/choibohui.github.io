$(function () {

    //스크롤 시 메뉴 변경

    // $(window).on('scroll', function () {
    //     var sct = $(window).scrollTop();
    //     if (sct > 500) {
    //         $('.toTop').fadeIn(300)
    //     } else {
    //         $('.toTop').fadeOut(1000)
    //     }
    // });


    // main_visual 슬라이더 Start
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        // useTransform: false,
    });

    // intro 슬라이더 Start
    $('.intro_slider').slick({
        arrows: false,
        autoplay: false,
        // useTransform: false,
        slidesToShow: 5,
        variableWidth: true,
    });


    // 슬라이더 버튼
    $('.intro_site .slide_util .next').on('click', function () {
        $('.intro_slider').slick('slickNext')
    });
})