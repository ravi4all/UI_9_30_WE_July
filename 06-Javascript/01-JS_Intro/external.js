/*document.getElementById("add").addEventListener("click", function(){
    num_1 = document.getElementById("box_1").value;
    num_2 = document.getElementById("box_2").value;
    sum = parseInt(num_1) + parseInt(num_2);
    document.getElementById("result").innerHTML = sum;
})*/


document.getElementById("add").addEventListener("click", add)

function add(){
    num_1 = document.getElementById("box_1").value;
    num_2 = document.getElementById("box_2").value;
    sum = parseInt(num_1) + parseInt(num_2);
    document.getElementById("result").innerHTML = sum;
}