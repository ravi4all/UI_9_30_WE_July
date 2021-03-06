window.addEventListener("load", init);

var u_name;
var pwd;
var c_pwd;

function init(){
    u_name = document.getElementById("box_1");
    pwd = document.getElementById("box_2");
    c_pwd = document.getElementById("box_3");
    
    u_name.addEventListener("blur", blankCheck);
    /*pwd.addEventListener("change", pwdStrength);
    c_pwd.addEventListener("change", confirmPassword);*/
    pwd.addEventListener("keyup", pwdStrength);
    c_pwd.addEventListener("keyup", confirmPassword);
}

function blankCheck(){
    var err = document.getElementById("err_1");
    if(u_name.value == ""){
        err.innerHTML = "Cannot leave this field blank";
    }
    else {
        err.innerHTML = "Proceed";
    }
}

function pwdStrength(){
    var err = document.getElementById("err_2")
    if (pwd.value.length == 0){
        err.innerHTML = "Cannot leave this blank";
        /*err.style.width = "auto";
        err.style.background = "transparent";*/
    }
    else if(pwd.value.length > 0 && pwd.value.length < 5){
        err.innerHTML = "Weak";
        /*err.style.width = "50px";
        err.style.background = "red";*/
        err.className = "weak";
    }
    else if(pwd.value.length >= 5 && pwd.value.length < 8){
        err.innerHTML = "Good";
        /*err.style.width = "80px";
        err.style.background = "yellow";*/
        err.className = "good";
    }
    else {
        err.innerHTML = "Strong";
        /*err.style.width = "120px";
        err.style.background = "green";*/
        err.className = "strong";
    }
}

function confirmPassword(){
    var err = document.getElementById("err_3");
    if(c_pwd.value === pwd.value) {
        err.innerHTML = "Password Match";
    }
    else {
        err.innerHTML = "Password do not match";
    }
}