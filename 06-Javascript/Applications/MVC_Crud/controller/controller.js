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
    document.getElementById("delete").addEventListener("click", deleteItem);
}

function addItem(){
    ul = document.getElementById("itemList");
    li = document.createElement("li");
    
    obj.addItem(itemName.value, itemPrice.value, itemColor.value, itemDesc.value)
    
    li.innerHTML = obj.id + " " + itemName.value + " " + itemPrice.value + " " + itemColor.value + " " + itemDesc.value;
    
    ul.appendChild(li);
    li.addEventListener("click", markItem);
}

function markItem(){
    event.srcElement.classList.toggle("selected");
    var currentItem = event.srcElement.innerHTML.split(" ")[0];
    /*console.log(currentItem);*/
    obj.toggleItem(currentItem);
}

function deleteItem(){
    obj.deleteItem();
    printItems();
}

function printItems(){
    ul.innerHTML = "";
    
    obj.itemList.forEach(function(obj){
        li = document.createElement("li");
        li.innerHTML = obj.id + " " + obj.name + " " + obj.color + " " + obj.price + " " + obj.desc;
        ul.appendChild(li);
        li.addEventListener("click", markItem);
    })
    
}