$(document).ready(function(){
    /*$("#btn_1").click(function(){
            $("img").hide(2000);
        });
        $("#btn_2").click(function(){
            $("img").show(2000);
        });
        $("#btn_3").click(function(){
            $("img").toggle(2000);
    });*/
    /*$("#btn_1").click(function(){
        $("img").fadeOut(2000);
    });
    $("#btn_2").click(function(){
        $("img").fadeIn(2000);
    });
    $("#btn_3").click(function(){
        $("img").fadeToggle(2000);
    });*/
    $("#btn_1").click(function(){
        $(".img").slideUp(2000);
    });
    $("#btn_2").click(function(){
        $(".img").slideDown(2000);
    });
    $("#btn_3").click(function(){
        $(".img").slideToggle(2000);
    });
})