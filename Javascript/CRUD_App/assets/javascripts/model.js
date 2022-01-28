// function Item(id, name, price, img) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.img = img;
// }

class Item {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.flag = true;
    }
}

var object = {
    cartItems : [],
    addProduct : function(id, name, price, img) {
        var obj = new Item(id, name, price, img);
        this.cartItems.push(obj);
        console.log(this.cartItems);
    },

    deleteProduct : function(id) {
        console.log("Deleting... "+id);
        var product = this.cartItems.filter(function(obj) {
                return obj.id == id;
        });
        product[0].flag = false;
        
        this.cartItems = this.cartItems.filter(function(obj) {
            return obj.flag == true;
        });
    },

    searchProduct : function() {

    }

}