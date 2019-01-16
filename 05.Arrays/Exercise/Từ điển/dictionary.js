var vn = ["đỏ", "cam", "vàng", "lục", "lam", "chàm", "tím", "trắng", "đen"];
var en = ["red", "oranges", "yello", "green", "blue", "indigo", "puple", "white", "black"];
function anhViet() {
    for (var i = 0; i < en.length; i++) {
        var word = document.getElementById("word").value;
        if (word === en[i]) {
            document.getElementById("result").innerHTML = vn[i];
            break;
        } else {
            document.getElementById("result").innerHTML = "không có trong từ điển";
        }
    }
}

function vietAnh() {
    for (var i = 0; i < en.length; i++) {
        var word = document.getElementById("word").value;
        if (word === vn[i]) {
            document.getElementById("result").innerHTML = en[i];
            break;
        } else {
            document.getElementById("result").innerHTML = "không có trong từ điển";
        }
    }
}