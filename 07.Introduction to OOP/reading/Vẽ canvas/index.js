
function duongcheo() {
    var ctx = document.getElementById("canvas1").getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
duongcheo();

function circle() {
    var ctx = document.getElementById("canvas2").getContext("2d");
    ctx.beginPath();
    ctx.arc(150, 100, 80, 0, 2 * Math.PI);
    ctx.stroke();
}
circle();

function canvasText() {
    var ctx = document.getElementById("canvas3").getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "Orange");
    ctx.fillStyle = grd;
    ctx.font = "italic 30px Time new Roman";
    ctx.fillText("Lê Hồng Tin", 60, 100);
}
canvasText();

