$(function () {


    // 웹 상단메뉴 모바일 고정 : 스크롤
    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct);
        sct > 0
            ? document.querySelector('.header').classList.add('on')
            : document.querySelector('.header').classList.remove('on')
    });


    // app_slider 슬라이더
    $('.app_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });


    $('.mopen').on('click', function () {
        $('.mopen').toggleClass('on')
        $('.gnb').toggleClass('on')
        $('body').toggleClass('on')
    });


    //페이지 스크롤 락  모바일 이벤트 차단 모음
    // disableScroll = () => {
    //     document.querySelector('body').addEventListener('touchmove', this.removeEvent, { passive: false });
    //     document.querySelector('body').addEventListener('onclick', this.removeEvent, { passive: false });
    //     document.querySelector('body').addEventListener('mousewheel', this.removeEvent, { passive: false });
    // }

    // removeEvent = e => {
    //     e.preventDefault();
    //     e.stopPropagation();
    // }

    // enableScroll = () => {
    //     document.querySelector('body').removeEventListener('touchmove', this.removeEvent);
    //     document.querySelector('body').removeEventListener('onclick', this.removeEvent);
    //     document.querySelector('body').removeEventListener('mousewheel', this.removeEvent);
    // }

})