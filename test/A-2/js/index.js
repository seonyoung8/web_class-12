document.addEventListener("DOMContentLoaded", () => {
    
    // 팝업 기능
    const btnPopup = document.querySelector(".btn-popup") // 버튼이 없으니, 자동으로 열거나 버튼 추가 필요
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    const btnClose = document.querySelector("#btn-close")

    // 팝업 자동 열기 (테스트용)
    popup.classList.add("on")
    modal.classList.add("on")

    btnClose.addEventListener("click", () => {
        // 팝업 닫히는 기능
        popup.classList.remove("on")
        modal.classList.remove("on")
    })

    // 슬라이드
    const train = document.querySelector(".train")
    let count = 0

    const train = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        train.style.transform = translateX(${-25*count}%)

        if(count==3){
            setTimeout(()=>{
                train.style.transition = none
                train.style.transform = translateX(0%)
                count=0
            },800)
        }

    },2500)

})