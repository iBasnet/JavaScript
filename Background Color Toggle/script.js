
const colors = ["Black", "White", "Red", "Green", "Blue", "Yellow", "Orange", "Pink", "Purple", "Brown", "Gray", "Silver", "Gold"];

let btn = document.querySelector(".btn");
let span = document.querySelector("span");

btn.addEventListener("click", function () {
    let index = randnum();
    document.body.style.backgroundColor = colors[index];
    span.textContent = colors[index];

})

function randnum() {
    return Math.floor(Math.random() * colors.length);
}