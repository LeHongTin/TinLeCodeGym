var num = [];
for (var i = 0; i < 100; i++) {
    num[i] = Math.floor(Math.random() * 101 + 1);
    if (i > 0 && i % 10 == 0) {
        document.write("<br>")
    }
    document.write(num[i] + "&nbsp&nbsp");
}

document.write("<br>" + "gia tri min la :", findMin(num));

function findMin(arr) {
    var min = num[0];
    for (i = 1; i < arr.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
    }
    return min;
}
