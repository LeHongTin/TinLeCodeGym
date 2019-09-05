function onclickYes() {
    alert("Yes. you are right ");
}

function noHover() {
    var x = Math.floor(Math.random()*window.innerWidth);
    var y = Math.floor(Math.random()*window.innerHeight);
    document.getElementById("nohover").style.left = x + "px";
    document.getElementById("nohover").style.top = y + "px";  

}