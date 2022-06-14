$(function () {
    $('.main_slider').on('init afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.slide01 .box .num').text("0" + (c ? c + 1 : 1) + " / " + "0" + s.slideCount)
        $('.slide01 .content>li').eq(c).addClass('on').siblings().removeClass('on')
    })
    // 제이쿼리 스크립트에서 “안에 들어있는 글자는” 문자로 나타난다.
    // 3째줄은 페이저, 4째줄은 페이지 번호에 따라 위에 띄워진 박스의 내용이 변경되는 코드
    // .eq = :nth-child , e s c 에서 c 는 숫자를 뜻함
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '250px',
    });
    // centerMode와 같이 모드를 추가하는 방법
    $('.slide01 .slide_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.slide01 .slide_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });
    // 요것이 기존 화살표가 아닌 이미지나 아이콘을 사용할때 리모콘으로 사용할 수 있게 변경하는 코드
    $('.left_slider').slick({
        arrows: false,
        fade: true,
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.left_slider',
    });

    $('.slide02 .right i:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev')
    });
    $('.slide02 .right i:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext')
    });

})