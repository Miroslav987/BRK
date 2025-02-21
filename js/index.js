
// ! Swiper Img ==================================

const my = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1300: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        },
        660: {
            slidesPerView: 1,
        },
        100:{
            centeredSlides:true,
            slidesPerView: 1,
            spaceBetween: 10,
        }

    }
});

        $(".about_our_team").on("mouseenter click",".main_info_team", function (){
            const swiperWidth = $('.swiper').width();

            if(swiperWidth > 1200){
                $(this).closest(".swiper-slide").addClass("active").css("right","400px")
                $(".swiper-slide-active").css("right","0")
                $(".swiper-slide-next").css("right","0")
            }
            else {

                $(this).closest(".swiper-slide").children('.extra_info').addClass("active_adaptive")

            }
        })

        $(".about_our_team").on("mouseleave click",".swiper-slide", function (){
            const swiperWidth = $('.swiper').width();
            if(swiperWidth > 1200) {
                $(this).css("right", "0px").removeClass("active")
            }
        })
        $(".about_our_team").on("mouseleave click",".active_adaptive", function (){
            const swiperWidth = $('.swiper').width();
                $(this).closest('.extra_info').removeClass("active_adaptive")
        })

// $(".about_our_team").on("mouseenter touchstart",".swiper-slide", function () {
//     const swiperWidth = $('.swiper').width();
//     if (swiperWidth <= 1200) {
//         $(this).children('.extra_info').addClass("active_adaptive")
//     }
// })
//
// $(".about_our_team").on("mouseleave touchstart",".swiper-slide", function () {
//     const swiperWidth = $('.swiper').width();
//     if (swiperWidth <= 1200) {
//         $(this).children('.extra_info').removeClass("active_adaptive")
//     }
// })


// ? Swiper Img ==================================

// ! Swiper partners  ==================================

// const mySwiper = new Swiper('.swiper_partners', {
//     slidesPerView: 2,
//     spaceBetween: 20,
//     loop: true,
//     autoplaySpeed: 1,
//     speed: 5000,
//     autoplay: {
//         delay: 0.5,
//         disableOnInteraction: false
//     },
//     breakpoints: {
//         800: {
//             slidesPerView: 5,
//         },
//     }
// });
// ? Swiper partners  ==================================


// ! FAQ ============================================================
$(".about_questions").on("click ",".card_questions",function () {
    const card_questions = $(this).closest('.card_questions')
    const content = card_questions.find('.card_questions_extra_info')
    const isVisible = content.is(':visible')

    if (isVisible) {
        content.slideUp()
        card_questions.removeClass('active')
    } else {
        $(".card_questions").removeClass("active")
        $(".card_questions_extra_info").slideUp()
        card_questions.addClass('active')
        content.slideDown()
    }
})

// function lockSroll (){
//     $('body').css("overflow-y",`auto`)
// }

$(window).scroll(function (){
    const headerHeight =$(".header").height()
    const mainHeight =$("main").height()
    const scrollHeight = window.scrollY;
    // console.log({"window":scrollHeight, "header":headerHeight})
    // if(scrollHeight == 12 ){
    //     // $('.header').css("transform",`translateY(-100vh)`)
    //
    //     $('body').css("transform",`translateY(-100vh)`)
    //     $('body').css("overflow-y",`hidden`)
    //
    //     setTimeout(() => {
    //         lockSroll()
    //     }, 1500);
    // }
    //
    // if(scrollHeight <= 0){
    //     $('body').css("transform",`translateY(0)`)
    //     // $('.header').css("transform",`translateY(0vh)`)
    //     // $('main').css("transform",`translateY(0vh)`)
    //
    // }
    console.log( headerHeight)
    console.log( headerHeight / 2.5)

    if (scrollHeight < headerHeight +400) {
        $('.header').css("height","100vh")
    }    if (scrollHeight > 10) {
        $('.header').css("height","50vh")
    }
    if (scrollHeight > 200) {
        $('.why_us_extra_info_block .left').css("animation-name",'about_why_us_left_Animation')
        // $('.why_us_extra_info_block .center').css("animation-name",'about_why_us_center_Animation')
        $('.why_us_extra_info_block .right').css("animation-name",'about_why_us_right_Animation')
    }

    if (scrollHeight > 600) {
        $('.about_our_objects .list').css("animation-name",'about_our_objects_Animation')
    }

    if (scrollHeight > 3500) {
        $(".card_questions").css("animation-name",'card_questions_Animation')
    }
})



// ? FAQ ============================================================

var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    duration: 100, // the scene should last for a scroll distance of 100px
    offset: 30 // start this scene after scrolling for 50px
})
    .setPin('#about_why_us') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller




// ! =======================================================

const  element2 = document.getElementById("phone2")

let maskOptions2 = {
    mask: '+996 000 000 000',
    lazy: false,

}
let mask2 = new IMask(element2, maskOptions2);

// ? =======================================================