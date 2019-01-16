var s1 = 1;
var s2 = 1;
for (var i = 2; i < 10; i++) {
    s = s1 + s2;
    if ((s % 5) == 0) {
        document.write("so dau tien trong day fibonacci chia het cho 5 la :" + s + "</br>");
        break;
    }
    s1=s2;
    s2=s;

}
