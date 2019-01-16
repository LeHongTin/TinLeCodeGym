var length = parseInt(prompt("Length of Fibonacy", 0));
var s1 = 1;
var s2 = 1;
document.write(length + " so dau tien trong day fibonacci la :<br>");
document.write(1 + "</br>" + 1 + "</br>")
for (var i = 2; i < length; i++) {
    s = s1 + s2;
    document.write(s + "</br>");
    s1 = s2;
    s2 = s;
}
