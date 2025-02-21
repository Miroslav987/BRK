$('.btn_nafixOpen').click(function () {
    $('.btn_nafixOpen').css("display","none")
    $('.btn_nafixClose').css("display","block")


    $('.nav_adaptive_blur').css({"display": "block"})
    $('.nav_adaptive_modal').css({"transform": "translateX(0)"})


})

$(".btn_nafixClose").click(function () {
    $('.btn_nafixOpen').css("display","block")
    $('.btn_nafixClose').css("display","none")
    $('.nav_adaptive_blur').css({"display": "none"})
    $('.nav_adaptive_modal').css({"transform": "translateX(100%)"})

})

$(".card button").on("click", function () {
    const info = $(this).closest(".card").find('.extra_info_block')
    const btn_open = $(this).closest(".card").find('.btn_open')

    const isVisible = info.is(':visible')
    if (isVisible) {
        btn_open.slideDown()
        info.slideUp()
        info.removeClass('active')
    } else {
        btn_open.slideUp()
        info.slideDown()
        info.addClass('active')
    }
})


const  element = document.getElementById("phone")

let maskOptions = {
    mask: '+996 000 000 000',
    lazy: false,

}
let mask = new IMask(element, maskOptions);



const swiper_our_objects = new Swiper('.swiper_our_objects', {
    slidesPerView: 3.2,
    slidesPerGroup:1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 1500,
        // reverseDirection: true,
        disableOnInteraction: false,
    },
    breakpoints: {

        1200: {
            slidesPerView: 3.2,
        },

        1000: {
            slidesPerView: 2.2,
        },

        100:{
            slidesPerView: 1,
        }

    }

});







