$(document).ready(function(){
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        /*console.log(scrollPos);*/
        if(scrollPos > 400){
            $("#header").addClass("scroll");
            $("body").addClass("bodyScroll");
        }
        else {
            $("#header").removeClass("scroll");
            $("body").removeClass("bodyScroll");
        }
    })
})