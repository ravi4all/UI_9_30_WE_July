window.addEventListener("load", init);

var num_1;
var num_2;
var result = 0;

function init(){
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    /*document.getElementById("add").addEventListener("click", calculator);
    document.getElementById("sub").addEventListener("click", calculator);
    document.getElementById("div").addEventListener("click", calculator);
    document.getElementById("mul").addEventListener("click", calculator);*/
    
    buttons = document.getElementsByTagName("button");
    /*buttons.addEventListener("click", calculator);*/
    
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", calculator);
    }
    
}


function calculator(){
    opr = event.srcElement.value;
    expression = num_1.value + opr + num_2.value;
    document.getElementById("result").innerHTML = eval(expression);
}


/*function calculator(){
    btn = event.srcElement.value;
    if (btn == "+"){
        result = parseInt(num_1.value) + parseInt(num_2.value);
    }
    else if (btn == "-"){
        result = parseInt(num_1.value) - parseInt(num_2.value);
    }
    else if (btn == "/"){
        result = parseInt(num_1.value) / parseInt(num_2.value);
    }
    else {
        result = parseInt(num_1.value) * parseInt(num_2.value);
    }
    
    document.getElementById("result").innerHTML = result;
}*/