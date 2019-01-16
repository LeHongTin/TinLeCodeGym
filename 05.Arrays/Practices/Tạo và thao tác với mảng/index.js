var x = 0;
var arr = [];
var i;
function addElementToArray() {
    arr[x] = document.getElementById("txtValue").value;
    x++;
    document.getElementById("txtValue").value = "";
}

function displayArray() {
    var e = "";
    for (x = 0; x < arr.length; x++) {
        e += "Element   " + x + ":" + arr[x] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}
function resetArr() {
    arr = [];
    x = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("displayMax").innerHTML = "";
    document.getElementById("displayMin").innerHTML = "";
}

function findMax() {
    var max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    document.getElementById("displayMax").innerHTML = "Max is : " + max;
}

function findMin() {
    var min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            max = arr[i];
        }
    }
    document.getElementById("displayMin").innerHTML = "Min is : " + min;
}