$(document).ready(function(){
    $("a").click(function(){
        /*$(this).parent().hide(1000);*/
        /*$(this).parents().hide(1000);*/
        /*$(this).parentsUntil('#parent_1').hide(1000);*/
        $(this).siblings('img').hide(1000);
    })
})