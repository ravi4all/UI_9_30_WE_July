window.addEventListener("load", init);

var itemName;
var itemPrice;
var itemColor;
var itemDesc;

function init(){
    itemName = document.getElementById("box_1");
    itemPrice = document.getElementById("box_2");
    itemColor = document.getElementById("box_3");
    itemDesc = document.getElementById("box_4");
    
    document.getElementById("add").addEventListener("click", addItem);
}

function addItem(){
    ul = document.getElementById("itemList");
    li = document.createElement("li");
    li.innerHTML = itemName.value + " " + itemPrice.value + " " + itemColor.value + " " + itemDesc.value;
    
    ul.appendChild(li);
    li.addEventListener("click", markItem);
}

function markItem(){
    event.srcElement.classList.toggle("selected");
}