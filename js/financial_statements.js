
$(".btn_annual").click(function () {
    $(".btn").attr("class","btn")
    $(this).attr("class","btn active")

    $('.list_annual').css("display",'flex')
    $('.list_quarterly').css("display",'none')
    $('.list_monthly').css("display",'none')
})


$(".btn_quarterly").click(function () {
    $(".btn").attr("class","btn")
    $(this).attr("class","btn active")

    $('.list_annual').css("display",'none')
    $('.list_quarterly').css("display",'flex')
    $('.list_monthly').css("display",'none')
})


$(".btn_monthly").click(function () {
    $(".btn").attr("class","btn")
    $(this).attr("class","btn active")

    $('.list_annual').css("display",'none')
    $('.list_quarterly').css("display",'none')
    $('.list_monthly').css("display",'flex')
})



