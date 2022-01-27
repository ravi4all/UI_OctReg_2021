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
    }
}

var object = {
    cartItems : [],
    addProduct : function(id, name, price, img) {
        var obj = new Item(id, name, price, img);
        this.cartItems.push(obj);
        console.log(this.cartItems);
    },

    deleteProduct : function() {

    },

    searchProduct : function() {

    }

}