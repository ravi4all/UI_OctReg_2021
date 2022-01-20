window.addEventListener("load", initEvents);

var btns;
var user_choice;
var cpu_choice;
function initEvents() {
    user_choice = document.querySelector("#choice").value;
    if(user_choice == 'X') {
        cpu_choice = '0';
    }
    else {
        cpu_choice = 'X';
    }
    btns = document.querySelectorAll(".btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", userMove);
    }
}

function userMove() {
    this.innerHTML = user_choice;
    this.setAttribute('disabled',true);
    setTimeout(function() {
        cpuMove();
    }, 1000);
}

function cpuMove() {
    cpuPosition = parseInt(Math.random() * 9);
    if(btns[cpuPosition].innerHTML == '0' || btns[cpuPosition].innerHTML == 'X') {
        console.log("Tried..."+cpuPosition);
        cpuMove();
    }
    else {
        btns[cpuPosition].innerHTML = cpu_choice;
        btns[cpuPosition].setAttribute('disabled',true);
    }
    
}