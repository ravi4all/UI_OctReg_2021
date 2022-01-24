window.addEventListener("load", initEvents);

var btns;
var user_choice;
var cpu_choice;
var counter = 0;
var winning_combinations = [[0,1,2], [3,4,5], [6,7,8], 
			                [0,3,6], [1,4,7], [2,5,8],
			                [0,4,8], [2,4,6]]
function initEvents() {
    var startBtn = document.querySelector("#start");
    startBtn.addEventListener("click", startGame);

    btns = document.querySelectorAll(".btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", userMove);
        btns[i].setAttribute('title',i);
    }
}

function startGame() {
    console.log("Game Started...");
    user_choice = document.querySelector("#choice").value;
    if(user_choice == 'X') {
        cpu_choice = '0';
    }
    else {
        cpu_choice = 'X';
    }
    console.log("User : "+user_choice);
    console.log("CPU : "+cpu_choice);
}

function userMove() {
    this.innerHTML = user_choice;
    this.setAttribute('disabled',true);
    counter += 1;
    var user_pos = this.title;
    checkWinner(user_choice, user_pos);
    setTimeout(function() {
        cpuMove();
    }, 1000);
}

function cpuMove() {
    if(counter < 9) {
        cpuPosition = parseInt(Math.random() * 9);
        if(btns[cpuPosition].innerHTML == '0' || btns[cpuPosition].innerHTML == 'X') {
            console.log("Tried..."+cpuPosition);
            cpuMove();
        }
        else {
            btns[cpuPosition].innerHTML = cpu_choice;
            btns[cpuPosition].setAttribute('disabled',true);
            counter += 1;
            checkWinner(cpu_choice, cpuPosition);
        }
    }
    else {
        alert("No more spaces left...Game Draw...");
    }   
}

function checkWinner(choice, pos) {
    for(var i = 0; i < winning_combinations.length; i++) {
        for(var j = 0; j < winning_combinations[i].length; j++) {
            if(winning_combinations[i][j] == pos) {
                winning_combinations[i][j] = choice;
            }
        }
    }
    console.log(winning_combinations);
}