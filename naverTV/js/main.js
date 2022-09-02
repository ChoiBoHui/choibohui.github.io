window.addEventListener('DOMContentLoaded', () => {

    // 메뉴
    const mainMenuBtn = document.querySelector(".Header .menu button");
    const gnb = document.querySelector(".gnb");
    const mMdDBtn = document.querySelector(".myMenu .dropDownBtn");
    const mMdDCon = document.querySelector(".myMenu .dropDownCon");
    const tBdDBtn = document.querySelector(".themaBox .dropDownBtn");
    const tBdDCon = document.querySelector(".themaBox .dropDownCon");

    mainMenuBtn.addEventListener("click", () => {
        mainMenuBtn.classList.toggle("open");
        gnb.classList.toggle("open");
        mMdDBtn.classList.remove("open");
        mMdDCon.classList.remove("open");
    });

    // dropDownBtn.addEventListener("click", function () {
    //     this.classList.toggle("open");
    //     dropDownCon.classList.toggle("open");
    // });
    // gnb에서 여러번 쓰이는 드랍다운 버튼의 기능이 동일하여 위와 같이 this를 써서 만들었는데, 제일 첫번째 있는 버튼만 작동하고 다른 버튼들은 작동하지 않음. 그래서 우선 아래처럼 각각 만들어줌
    // dropDownBtn.addEventListener("click", function () {
    //     this.dropDownBtn.classList.toggle("open");
    //     this.dropDownCon.classList.toggle("open");
    // });
    // 안되네... 찾아보니 쿼리셀렉토는 제일 첫번째 아이만 선택한다함... 그래서 다른 선택자 알아보는중인데도 모르겠다..

    mMdDBtn.addEventListener("click", () => {
        mMdDBtn.classList.toggle("open");
        mMdDCon.classList.toggle("open");
    });

    tBdDBtn.addEventListener("click", () => {
        tBdDBtn.classList.toggle("open");
        tBdDCon.classList.toggle("open");
    });



});