$(document).ready(function(){

//! закртытие details через кнопку
    $(".btn_open").click(function() {
        $(this).parents('.information_block').attr("open","");
    })
//? откртытие details через кнопку

//! закртытие details через кнопку
    $(".btn_close").click(function() {
        $(this).parents('.information_block').removeAttr("open");
    })
//? закртытие details через кнопку

//! отмена стандартного поведения 
    $('.information_block').click(function(event) {
        event.preventDefault(); 
      });
//? отмена стандартного поведения

})