$(function(){
    $("#container .b_1").click(function(){
        $(".popup1").fadeIn();
    });
    $(".close").click(function(){
        $(".popup1").fadeOut();
    });

    $("#container .b_2").click(function(){
        $(".popup2").fadeIn();
    });
    $(".close").click(function(){
        $(".popup2").fadeOut();
    });

    $("#container .b_3").click(function(){
        $(".popup3").fadeIn();
    });
    $(".close").click(function(){
        $(".popup3").fadeOut();
    });
});