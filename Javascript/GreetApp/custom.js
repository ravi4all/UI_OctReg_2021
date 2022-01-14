// document.getElementById("btn").addEventListener(Event, callback function)
// Event Binding - bind your event with function name

// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", greet);
// });

window.addEventListener("load", initEvents);

function initEvents() {
    // console.log("External JS Executed...");
    document.getElementById("btn").addEventListener("click", greet);
}

// initEvents();

function greet() {
    var textbox = document.getElementById("box_1");
    var username = textbox.value;
    document.getElementById("output").innerText = username;
}