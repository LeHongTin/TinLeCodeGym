
var imgObj = "";
function init() {
    imgObj = document.getElementById('ball');
    imgObj.style.position = 'relative';
    imgObj.style.left = '500px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
}
function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 100 + 'px';
}
window.onload = init();

function leftArrowPressed() {
    var element = document.getElementById("ball");
    element.style.left = parseInt(element.style.left) - 100 + 'px';
} function rightArrowPressed() {
    var element = document.getElementById("ball");
    element.style.left = parseInt(element.style.left) + 100 + 'px';
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}