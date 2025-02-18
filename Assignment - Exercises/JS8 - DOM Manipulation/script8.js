const subtract = document.getElementById("subtract");
const reset = document.getElementById("reset");
const add = document.getElementById("add");
const counterText = document.getElementById("counterText");

let count = 0;

add.onclick = function() {
    count++;
    counterText.textContent = count;
}

subtract.onclick = function() {
    count--;
    counterText.textContent = count;
}

reset.onclick = function() {
    count = 0;
    counterText.textContent = count;
}