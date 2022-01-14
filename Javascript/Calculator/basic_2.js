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
    if(operator == "+") {
        var result = parseInt(fnum.value) + parseInt(snum.value);
    }
    else if(operator == "-") {
        var result = parseInt(fnum.value) - parseInt(snum.value);
    }
    else if(operator == "/") {
        var result = parseInt(fnum.value) / parseInt(snum.value);
    }
    else {
        var result = parseInt(fnum.value) * parseInt(snum.value);
    }
    showResult(result);
}

function showResult(result) {
    document.querySelector("#box_3").value = result;
}