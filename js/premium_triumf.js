 // ? Modal ==================================

 $(".img_block").on("click","button",function () {
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
     console.log(img_adaptive)
     $(this).closest(".standard_plan_adaptive_btns").siblings(".standard_plan_adaptive_img ").children(".standard_plan_img").attr("src",img_adaptive)
 })


 $(".standard_plan_adaptive_img").on('click',function (){
     $(this).addClass("look_img")
     $(this).siblings(".btn_close").css("display","block")
 })

 $(".btn_close").on('click',function (){
     $(this).css("display","none")
     $(this).siblings(".standard_plan_adaptive_img").removeClass("look_img")
 })

 $(".standard_plan_img").on("click", function(e) {
     const img = $(this);
     const offset = img.offset();
     const x = e.pageX - offset.left;
     const y = e.pageY - offset.top;

     img.css({
         transformOrigin: `${x}px ${y}px`,
         transform: 'scale(4)'
     });
 });

 $(document).on("click", function(e) {
     const img = $(".standard_plan_img");
     const offset = img.offset();
     const x = e.pageX;
     const y = e.pageY;

     if (x < offset.left ||   x > offset.left + img.width() || y < offset.top || y > offset.top + img.height()) {
         img.css({
             transform: 'scale(1)'
         });
     }
 });

 // ? Modal ==================================

// ! Swiper Img ==================================
const mySwiper = new Swiper('.swiper', {
    slidesPerView: 3,
    slidesPerGroup:1,
    loop: true,
    navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
    breakpoints: {
        800: {
            spaceBetween: -400,

        },
        600: {
            spaceBetween: -500,
        },
        100: {
            spaceBetween: -300,
        },
    }
  });
  // ? Swiper Img ==================================

// ! Scroll Animation ==================================

$(window).scroll(function (){
    const scrollHeight = window.scrollY

    // if (scrollHeight > 300) {
    //     $(".list").css("animation-name","listAnimation")
    // }
    if (scrollHeight > 600) {
        $(".one_img_scroll").css("animation-name","one_imgAnimation")
        $(".one_box_info").css("animation-name","one_box_infoAnimation")
    } 
    if (scrollHeight > 1000) {
        $(".two_box_img_scroll").css("animation-name","all_Animation")
        $(".two_box_info").css("animation-name","two_infoAnimation")
    } 
    if (scrollHeight > 1300) {
        $(".location_info").css("animation-name","locationAnimation")
    } 

  })

// ? Scroll Animation ==================================
