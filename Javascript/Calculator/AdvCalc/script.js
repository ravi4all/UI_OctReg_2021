window.addEventListener("load", initEvents);
var box;
function initEvents() {
    var numBtns = document.querySelectorAll(".num");
    box = document.querySelector("#box");
    for(var i = 0; i < numBtns.length; i++) {
        numBtns[i].addEventListener("click", appendNumbers);
    }

    var oprBtns = document.querySelectorAll(".opr");
    for(var i = 0; i < oprBtns.length; i++) {
        oprBtns[i].addEventListener("click", appendNumbers);
    }
}

function appendNumbers() {
    var num = this.innerHTML;
    box.value += num;
}