

var board = [];
var data = "";
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        board[i] = [];
        board[i][j] = 0;
    }
}

for (var i = 0; i < 5; i++) {
    data += "<br>";
    for (var j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
document.getElementById("gameCaro").innerHTML = data;