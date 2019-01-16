var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function Rectangle() {
    drawBar(100,100,100,10);
}

function drawBar(x,y,width,height){
    ctx.fillStyle = "blue";
    ctx.fillRect(x,y,width,height);
}
