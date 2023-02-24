index = 0
function toggle() {
    let colors = ["#DEFFFF", "#0F111A"];
    document.body.style.background = colors[index++]

    if (index > colors.length - 1) {
        index = 0;
    }

    let mode = document.getElementById("mode")

    if (index == 0) {
        mode.innerHTML = "🌙"
        mode.style.background = "#1E293B";
    }
    else {
        mode.innerHTML = "☀️"
        mode.style.background = "white";
    }
}