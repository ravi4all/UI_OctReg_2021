window.addEventListener("load", initEvents);

function initEvents() {
    loadProducts();
}

function loadProducts() {
    var list_1 = document.querySelector("#list-1");
    // for(var i = 0; i < products.length; i++) {
    //     var li = document.createElement("li");
    //     var img = document.createElement("img");
    //     img.setAttribute('src', products[i].p_image);
    //     img.className = "w-100";
    //     var h4 = document.createElement("h4");
    //     h4.innerHTML = products[i].p_name;
    //     var p = document.createElement("p");
    //     p.innerHTML = "<b>Price</b> : " + products[i].p_price;
    //     li.appendChild(img);
    //     li.appendChild(h4);
    //     li.appendChild(p);
    //     list_1.appendChild(li);
    // }

    // for each object of product array
    products.forEach(function(obj) {
        var li = document.createElement("li");
        var imgWrapper = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute('src', obj.p_image);
        imgWrapper.appendChild(img);
        imgWrapper.className = "img-wrapper";
        img.className = "w-100";
        var h4 = document.createElement("h4");
        h4.innerHTML = obj.p_name;
        var p = document.createElement("p");
        p.innerHTML = "<b>Price</b> : " + obj.p_price;
        var button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.className = "btn btn-primary w-100";
        button.setAttribute('title', obj.p_id);
        li.appendChild(imgWrapper);
        li.appendChild(h4);
        li.appendChild(p);
        li.appendChild(button);
        list_1.appendChild(li);
        button.addEventListener("click", addToCart);
    });
}

function addToCart() {
    console.log(this.title);
    for(var i= 0 ; products.length; i++) {
        if(products[i].p_id == this.title) {
            object.addProduct(products[i].p_id, products[i].p_name,
                products[i].p_price, products[i].p_image);
                break;
        }
    }
    showCart();
}

function showCart() {
    var list_1 = document.querySelector("#cart-list");
    list_1.innerHTML = "";
    object.cartItems.forEach(function(obj) {
        var li = document.createElement("li");
        var imgWrapper = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute('src', obj.img);
        imgWrapper.appendChild(img);
        imgWrapper.className = "img-wrapper";
        var h6 = document.createElement("h6");
        h6.innerHTML = obj.name;
        var p = document.createElement("p");
        p.innerHTML = "<b>Price</b> : " + obj.price;
        // var button = document.createElement("button");
        // button.innerText = "Add to Cart";
        // button.className = "btn btn-primary w-100";
        // button.setAttribute('title', obj.p_id);
        li.appendChild(imgWrapper);
        li.appendChild(h6);
        li.appendChild(p);
        // li.appendChild(button);
        list_1.appendChild(li);
        // button.addEventListener("click", addToCart);
    });
}