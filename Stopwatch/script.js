const display = document.getElementById("display");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

document.getElementById("startBtn").addEventListener("click", () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        toggleHeaderFooterVisibility(false);
    }
});

document.getElementById("stopBtn").addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00:00";
    toggleHeaderFooterVisibility(true);
});

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 2)}`;
}

function pad(number, digits = 2) {
    return number.toString().padStart(digits, '0');
}

function toggleHeaderFooterVisibility(visible) {
    if (visible) {
        header.classList.remove("hidden");
        footer.classList.remove("hidden");
    } else {
        header.classList.add("hidden");
        footer.classList.add("hidden");
    }
}