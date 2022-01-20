window.addEventListener("load", initEvents);

var btns;
function initEvents() {
    btns = document.querySelectorAll(".btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", userMove);
    }
}

function userMove() {
    this.innerHTML = 'X';
    setTimeout(function() {
        cpuMove();
    }, 1000);
}

function cpuMove() {
    cpuPosition = parseInt(Math.random() * 9);
    btns[cpuPosition].innerHTML = '0';
}