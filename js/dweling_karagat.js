const navfix = document.querySelector(".navfix")

const main_info = document.querySelector(".main_info")
const basic_solutions_info = document.querySelector(".basic_solutions_info")
const basic_solutions_karagat = document.querySelector(".basic_solutions_karagat")
const location_karagat = document.querySelector(".location_karagat")
const swiper_karagat = document.querySelector(".swiper_karagat")
const layout_plan_karagat = document.querySelector(".layout_plan_karagat")
const layout_apartment_karagat = document.querySelector(".layout_apartment_karagat")
const cards = document.querySelectorAll(".card")
const plan_home_two = document.querySelector(".plan_home_two")

const modal = document.getElementById("modal")

// ! Modal ====================================

// $('.plan_home_two').click(function (){
//     console.log(1)
//     $("#modal").html(`<article class="modal"><div class="modal_block"><img src="../images/dweling_karagat/modal.jpg" alt=""> <button onClick="closeModal()">Закрыть</button></div></article>`)
// })
$(".about_layout_plan").on("click","button",function () {
    let img =$(this).attr("data-img")
    $("#modal").html(`<article class="modal"><div class="modal_block"><button onClick="closeModal()">Закрыть</button> <img src=${img} alt=""></div> </article>`)

})
function closeModal() {
    $("#modal").html("")
}
// ? Modal ====================================


// ! Swiper Img ==================================
const mySwiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    spaceBetween: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1300: {
            slidesPerView: 2.4,
            spaceBetween: 1,
        },
        1000: {
            slidesPerView: 2.2,
            spaceBetween: 1,
            navigation: {},
        },
    }
});
// ? Swiper Img ==================================


// ! Scroll Animation ==================================

$(".header .main_info").css("animation-name","main_infoanimation")
$(window).scroll(function (){
    const scrollHeight = window.scrollY;

    if (scrollHeight > 300) {
        $(".basic_solutions_karagat").css("animation-name","karagatAnimation")
        $(".basic_solutions_info").css("animation-name","basic_solutions_infoanimation")
    }
    if (scrollHeight > 750) {
        $(".card").css("animation-name","cardAnimation")
    }
    if (scrollHeight > 1400) {
        $(".location_karagat").css("animation-name","karagatAnimation")

    }
    if (scrollHeight > 2000) {
        $(".swiper_karagat").css("width","95%")

    }
    if (scrollHeight > 2600) {
        $(".layout_plan_karagat").css("animation-name","karagatAnimation")

    }
    if (scrollHeight > 3300) {
        $(".layout_apartment_karagat").css("animation-name","karagatAnimation")
    }
})


// ? Scroll Animation ==================================