
var length = parseInt(prompt("Length of Fibonacy", 0));
var s1 = 1;
var s2 = 1;
document.write(1 + "</br>" + 1 + "</br>")
var tong = 0;
for (var i = 2; i < length; i++) {
    s = s1 + s2;
    document.write(s + "</br>");
    tong = tong + s;
    s1 = s2;
    s2 = s;
}
document.write(" Tong la :",tong);
console.log(tong);