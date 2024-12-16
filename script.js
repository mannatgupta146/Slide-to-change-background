const body = document.body;
const range = document.getElementById("_range");
const number = document.getElementById("rangeValue");

function updateStyle() {
    const value = Number(number.innerText);

    // Determine styles for the current range
    if (value >= 91) {
        applyStyles("#000", "#f5d300");
    } else if (value >= 81) {
        applyStyles("#111", "#ff4500");
    } else if (value >= 71) {
        applyStyles("#222", "#00ff7f");
    } else if (value >= 61) {
        applyStyles("#333", "#00ced1");
    } else if (value >= 51) {
        applyStyles("#444", "#4169e1");
    } else if (value >= 41) {
        applyStyles("#555", "#8a2be2");
    } else if (value >= 31) {
        applyStyles("#666", "#ff1493");
    } else if (value >= 21) {
        applyStyles("#777", "#ff69b4");
    } else if (value >= 11) {
        applyStyles("#888", "#ff6347");
    } else if (value === 0) {
        applyStyles("black", "#333");
    }
}

function applyStyles(color, backgroundColor) {
    number.style.color = color;
    body.style.backgroundColor = backgroundColor;
}

range.addEventListener("input", function () {
    const sliderValue = this.value;
    number.innerText = sliderValue;
    updateStyle();
});
