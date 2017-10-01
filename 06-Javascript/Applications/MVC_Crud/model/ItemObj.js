var obj = {
    id : 0,
    itemList : [],
    
    addItem : function(name,price,color,desc){
        this.id++;
        var itemObj = new Item(this.id, name, price, color, desc);
        this.itemList.push(itemObj);
        console.log(this.itemList);
    },
    
    toggleItem : function(id){
        var newItem = this.itemList.filter(function(obj){
            return obj.id == id;
        });
        newItem[0].selected = !newItem[0].selected;
        console.log(newItem);
    },
    
    deleteItem : function(){
        this.itemList = this.itemList.filter(function(obj){
            return obj.selected == false;
        })
    }
    
}