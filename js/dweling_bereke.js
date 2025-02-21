// ! Modal ==================================
$('.three').click(function (){
    $("#modal").html(`<article class="modal"><div class="modal_block"><img src="../images/dweling_bereke/plan.jpg" alt=""> <button onClick="closeModal()">Закрыть</button></div></article>`)
})

function closeModal() {
    $("#modal").html("")
}



// ? Modal ==================================


// ! Scroll Animation ==================================
$(".header").css("animation-name","headerAnimation")
$(window).scroll(function (){
    const scrollHeight = window.scrollY;

    if (scrollHeight > 400) {
        $(".architecture_leftImg").css("animation-name","all_Animation")
        $(".architecture_rightImg").css("animation-name","all_Animation")
    }
    if (scrollHeight > 500) {
        $(".architecture_rightInfo").css("animation-name","all_Animation")
    }
    if (scrollHeight > 1300) {
        $(".listImg").css("animation-name","listImgAnimation")
    }
})

// ? Scroll Animation ==================================

// ! Swiper Img ==================================
const mySwiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup:1,
    spaceBetween:10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// !  ==================================