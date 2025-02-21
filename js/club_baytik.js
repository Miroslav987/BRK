
// ! Swiper Img ==================================
const mySwiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup:1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {


        // 700: {
        //     spaceBetween: 20,
        // },
        //
        // 100:{    slidesPerView: 1,
        //     spaceBetween: -100,
        // }

    }
});
// ! Swiper Img ==================================


// ! Scroll Animation =============================

$(window).scroll(function (){
    const scrollHeight = window.scrollY

    if(scrollHeight >= 50){
        $(".about_info_text_top").css("animation-name","all_Animation")
        $(".info_live_img").css("animation-name","all_Animation")
        $(".info_live_text").css("animation-name","all_Animation")

    }
    if(scrollHeight >= 700){
        $(".characteristic_list").css("animation-name","characteristic_list_Animation")
    }
    if(scrollHeight >= 1000){
        $(".info_park_text").css("animation-name","all_Animation")
        $(".info_park_img").css("animation-name","all_Animation")
    }
    if(scrollHeight >= 2100){
        $(".park_location_info_text").css("animation-name","all_Animation")
        $(".park_location_info_img").css("animation-name","all_Animation")
    }
    if(scrollHeight >= 2400){
        $(".info_map_text").css("animation-name","info_map_text_Animation")
    }
    if(scrollHeight >= 2700){
        $(".swiper_info").css("animation-name","swiper_info_Animation")
    }
    if(scrollHeight >= 4800){
        $(".list_plan").css("animation-name","list_plan_Animation")
    }
})

// ? Scroll Animation =============================


// ! Modal ==================================


// $(".one").click(function (){
//     console.log(3)
//     $("#modal").html(`<article class="modal"><div class="modal_block"> <button onClick="closeModal()">Закрыть</button> <img src="../images/club_baytik/modal.jpg" alt=""> </div></article>`)
// })
$(".standard_plan_img").on("click","button",function () {
    let img =$(this).attr("data-img")
    $("#modal").html(`<article class="modal"><div class="modal_block"><button onClick="closeModal()">Закрыть</button> <img src=${img} alt=""></div> </article>`)

})
function closeModal() {
    $("#modal").html(``)
}


$(".standard_plan_adaptive ").on("click","button",function () {
    $('button').removeClass('active')
    $(this).addClass("active")
    let img_adaptive =$(this).attr("data-img")
    $(this).closest(".standard_plan_adaptive_btns").siblings(".standard_plan_adaptive_img ").children(".img").attr("src",img_adaptive)
})


$(".standard_plan_adaptive_img").on('click',function (){
    $(this).addClass("look_img")
    $(this).siblings(".btn_close").css("display","block")
})

$(".btn_close").on('click',function (){
    $(this).css("display","none")
    $(this).siblings(".standard_plan_adaptive_img").removeClass("look_img")
})


$(".img").on("click", function(e) {
    const img = $(this);
    const offset = img.offset();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;

    // Установка нового трансформации
    img.css({
        transformOrigin: `${x}px ${y}px`, // Установка центра зума
        transform: 'scale(4)' // Зум в 2 раза
    });
});

$(document).on("click", function(e) {
    const img = $(".img");
    const offset = img.offset();
    const x = e.pageX;
    const y = e.pageY;

    // Проверяем, был ли клик вне изображения
    if (x < offset.left ||   x > offset.left + img.width() || y < offset.top || y > offset.top + img.height()) {
        img.css({
            transform: 'scale(1)' // Возврат к исходному размеру
        });
    }
});





$('.btn_baytik').on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about_standard_plan').offset().bottom
    }, 1000); // 1000 - время в миллисекундах для плавного скролла
});