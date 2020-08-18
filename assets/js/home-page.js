$(".info-title-container").click(function(){
    $(this).siblings().slideToggle();
    $(this).children().children("i").toggleClass("fa-angle-double-down").toggleClass("fa-angle-double-up");
   
});
