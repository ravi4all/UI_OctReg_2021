window.addEventListener("load", initEvents);
var fnum;
var snum;
var operator;
function initEvents() {
    
    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click",calc);
    }
}

function calc() {
    // console.log(this);
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    operator = this.innerText;
    
    var expression = fnum.value + operator + snum.value;
    console.log(expression);
    var result = eval(expression);

    showResult(result);
}

function showResult(result) {
    document.querySelector("#box_3").value = result;
}