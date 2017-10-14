$(document).ready(function(){
    $("#btn_1").click(function(){
        $("#div_1").animate({
            left : '500px',
            height: '300px',
            width: '300px',
            opacity: '0.5'
        }, 3000);
    })
})