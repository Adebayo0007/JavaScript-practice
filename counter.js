let add = document.querySelector(".up");
let subract = document.querySelector(".down");
let interval = document.querySelector(".input");

add.addEventListener("click", function () {
let output = document.querySelector(".demo");
let inter = document.querySelector(".input").value;
let count = Number(inter);
let result = Number(output.innerText) + count;
output.innerText = result;
});

subract.addEventListener("click", function () {
let output = document.querySelector(".demo");
let inter = document.querySelector(".input").value;
let count = Number(inter);
let result = Number(output.innerText) - count;
output.innerText = result;
});