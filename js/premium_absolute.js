
// ! Modal ==============================



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


    img.css({
        transformOrigin: `${x}px ${y}px`,
        transform: 'scale(4)'
    });
});

$(document).on("click", function(e) {
    const img = $(".img");
    const offset = img.offset();
    const x = e.pageX;
    const y = e.pageY;

    if (x < offset.left ||   x > offset.left + img.width() || y < offset.top || y > offset.top + img.height()) {
        img.css({
            transform: 'scale(1)'
        });
    }
});


// ? Modal =============================


// ! Scroll Animation =============================


$(window).scroll(function (){
  const scrollHeight = window.scrollY

  // if (scrollHeight > 500) {
  //   $(".familiarization_block").css("animation-name","familiarization_block_Animation")
  // }

  if (scrollHeight > 500) {
    $(".familiarization_info").css("opacity","1")
  }

  if (scrollHeight > 1000) {
    $(".characteristic_info").css("animation-name","characteristic_info_Animation")
  }
  if (scrollHeight > 1300) {
    $(".architecture_patternt").css("animation-name","architecture_patternt_Animation")
    $(".architecture_main_text").css("animation-name","architecture_text_Animation")
    $(".architecture_extra_text").css("animation-name","architecture_text_Animation")
  }
  if (scrollHeight > 2000) {
    $(".imgs_future").css("animation-name","imgs_future_Animation")
    $(".info_future").css("animation-name","info_future_Animation")
  }
  if (scrollHeight > 2400) {
    $(".info_company").css("animation-name","info_company_Animation")
  }
  if (scrollHeight > 3400) {
    $(".info_location").css("animation-name","info_location_Animation")

  }
});

// ! Scroll Animation =============================

// ! Swiper Img ==================================
const mySwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// ? Swiper Img ==================================
