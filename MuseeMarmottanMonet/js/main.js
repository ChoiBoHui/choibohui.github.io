window.addEventListener('DOMContentLoaded', () => {

    // 메뉴
    const menu = document.querySelector(".menu-container");
    const gnb = document.querySelector(".gnb");
    const bgblur = document.querySelector(".back_drop");
    const gallery = document.querySelector(".gallery");
    const pic = document.querySelector(".gallery a");
    const guide = document.querySelector(".guide");

    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        gnb.classList.toggle("open");
        bgblur.classList.toggle("on");
    });
    // 메뉴 버튼을 누르지 않고, header를 제외한 다른곳을 눌러도 메뉴가 닫히게
    bgblur.addEventListener("click", () => {
        menu.classList.remove("active");
        gnb.classList.remove("open");
        bgblur.classList.remove("on");
    });

    // 메인 컨텐츠
    pic.addEventListener("click", () => {
        gallery.classList.toggle("push");
        guide.classList.toggle("push");
    });




    // 속초 호텔 코드 -------------------------------------------------------
    // window.addEventListener('scroll', () => {
    //     let sct = window.scrollY;
    //     console.log(sct);
    //     sct > 0
    //         ? document.querySelector('#Header').classList.add('on')
    //         : document.querySelector('#Header').classList.remove('on')
    //     sct > 500
    //         ? document.querySelector('.to_top').classList.add('on')
    //         : document.querySelector('.to_top').classList.remove('on');
    // });

    // new Swiper('.MainSlider', {
    //     loop: true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    // })

    // const SCE_ELE = document.querySelectorAll('.active-event');
    // window.addEventListener('scroll', () => {
    //     let sct = window.scrollY;
    //     SCE_ELE.forEach(el => {
    //         sct > el.offsetTop - 300
    //             ? el.classList.add('on')
    //             : el.classList.remove('on')
    //     })
    // });

    // document.querySelector('.to_top').addEventListener('click', () => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    // });

    // document.querySelector('.mopen').addEventListener('click', (e) => {
    //     const TG = e.currentTarget;
    //     TG.classList.toggle('on');
    //     document.querySelector('#Header').classList.toggle('ox')
    // });

    // document.querySelector('#Header').addEventListener('scroll', (e) => {
    //     console.log(e)
    // })

})