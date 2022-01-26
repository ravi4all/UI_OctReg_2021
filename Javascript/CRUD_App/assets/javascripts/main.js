window.addEventListener("load", initEvents);

function initEvents() {
    loadProducts();
}

function loadProducts() {
    var list_1 = document.querySelector("#list-1");
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute('src', products[0].p_image);
    img.className = "w-100";
    var h4 = document.createElement("h4");
    h4.innerHTML = products[0].p_name;
    var p = document.createElement("p");
    p.innerHTML = "<b>Price</b> : " + products[0].p_price;
    li.appendChild(img);
    li.appendChild(h4);
    li.appendChild(p);
    list_1.appendChild(li);
}