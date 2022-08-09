$(function(){
    $("#v_container p a").click(function(){
        $(".popup").fadeIn();
    });
    $(".close").click(function(){
        $(".popup").fadeOut();
    });
});