var data = 82;
result = true;
while (result) {
    var num = parseInt(prompt("So ban du doan la:"));
    if (num == data) {
        alert("correct");
        break;
    } else if (num < data) {
        alert("too low");
        
    } else if(num>data) {
        alert("too hight");
        
    } else {
        alert("vui long nhap so");

    }
}