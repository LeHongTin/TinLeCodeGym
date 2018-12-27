// var lenght = parseInt(prompt("Lenght of Pibonacy", 0));
// var beforeBeForeNumber = 1;
// var beforeNumber = 1;
// var fibonacies = [1, 1];
// for (var i = 2; i < lenght; i++) {
//     var currentFibonacyNumber = beforeBeForeNumber + beforeNumber;
//     fibonacies.push(currentFibonacyNumber);
//     beforeBeForeNumber = beforeNumber;
//     beforeNumber = currentFibonacyNumber;
// }

// console.log(fibonacies);
// for (index in fibonacies) {
//     document.write(fibonacies[index] + "</br>");
// }


var lenght = parseInt(prompt("Length of Fibonacy", 0));
var s1 = 1;
var s2 = 1;
document.write(1 + "</br>" + 1 + "</br>")
var tong = 0;
for (var i = 2; i < lenght; i++) {
    s = s1 + s2;
    document.write(s + "</br>");
    tong = tong + s;
    s1 = s2;
    s2 = s;
}
document.write("Tổng là:",tong);
