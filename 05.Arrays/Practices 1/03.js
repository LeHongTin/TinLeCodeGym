do {
    var value = prompt("Enter a number: ");
    var x = [-3, 5, 1, 3, 2, 10];
    for (var i = 0; i < x.length; i++) {
        if (value == x[i]) {
            alert("Value " + x[i] + "found at " + i); break;
        }
    }
}
while (value != x[i]) 