window.addEventListener("load", init);

var num_1;
var num_2;

function init(){
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add(){
    /*console.log("Numbers are "+num_1,num_2);*/
    sum = parseInt(num_1.value) + parseInt(num_2.value);
    document.getElementById("result").innerHTML = sum;
}

function sub(){
    sum = parseInt(num_1.value) - parseInt(num_2.value);
    document.getElementById("result").innerHTML = sum;
}

function div(){
    sum = parseInt(num_1.value) / parseInt(num_2.value);
    document.getElementById("result").innerHTML = sum;
}

function mul(){
    sum = parseInt(num_1.value) * parseInt(num_2.value);
    document.getElementById("result").innerHTML = sum;
}