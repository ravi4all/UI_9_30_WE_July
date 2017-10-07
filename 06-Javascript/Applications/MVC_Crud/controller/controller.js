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
    document.getElementById("save").addEventListener("click", saveItem);
    document.getElementById("load").addEventListener("click", loadItem);
}

function saveItem(){
    if(window.localStorage){
        var json = JSON.stringify(obj.itemList);
        localStorage.setItem('items',json);
        
        Notification.requestPermission(function(){
            var n = new Notification("ITEM CRUD-Application : By Ravikant Tyagi", {
                body : "Hello User , Your Data is Saved in Your Browser",
                icon : "success.png"
            });

            document.getElementById("audio").play();
            setTimeout(function(){
                n.close();
                document.getElementById("audio").pause();
                //document.getElementById("audio").currentTime=0;
            },7000);

        });
        
    }
    else {
        alert("Your browser do not support localstorage");
    }
}

function loadItem(){
    var data = localStorage.getItem('items');
    var json = JSON.parse(data);
    obj.itemList = json;
    printItems();
}

function addItem(){
    var ul = document.getElementById("itemList");
    li = document.createElement("li");
    
    img = document.createElement('img');
    img.setAttribute('src', 'garbage.png');
    
    obj.addItem(itemName.value, itemPrice.value, itemColor.value, itemDesc.value)
    
    li.innerHTML = obj.id + " " + itemName.value + " " + itemPrice.value + " " + itemColor.value + " " + itemDesc.value;
    li.appendChild(img);
    
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
    var ul = document.getElementById("itemList");
    ul.innerHTML = "";
    
    obj.itemList.forEach(function(obj){
        li = document.createElement("li");
        li.innerHTML = obj.id + " " + obj.name + " " + obj.color + " " + obj.price + " " + obj.desc;
        ul.appendChild(li);
        li.addEventListener("click", markItem);
    })
    
}