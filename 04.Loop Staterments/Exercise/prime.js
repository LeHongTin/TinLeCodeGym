var num = parseInt(prompt("Number of prime need to print", 0));
var count = 0;
var n = 2;
while (count < num) {
    if (isPrime(n)) {
        document.write(n+"</br>");
        count ++;
    } n++;
}


function isPrime(value){
    var result = true;
    if (value != 2) {
        for (var i = 2; i < value - 1; i++) {
            if (value% i == 0){
                result = false;
            }break;
        }
    } return result;
}


