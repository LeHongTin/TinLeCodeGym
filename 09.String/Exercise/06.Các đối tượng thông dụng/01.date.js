var birthday = new Date(1999, 2, 6, 7, 30, 50)
var present = new Date(2018, 12, 28, 11, 34, 30);

var year = present.getFullYear() - birthday.getFullYear();
document.write("toi da song " + year + " nam <br>");

var month = year * 12 + present.getMonth() - birthday.getMonth();
document.write("toi da song " + month + " thang <br>");

var day = month * 30 + present.getDay() - present.getDay();
document.write("toi da song " + day + " ngay <br>");

var hour = day * 24 + present.getHours() - birthday.getHours();
document.write("toi da song " + hour + " gio <br>");

var minute = hour * 60 + present.getMinutes() - birthday.getMinutes();
document.write("toi da song " + minute + " phut <br>");

var seconds = minute * 60 + present.getSeconds() + birthday.getSeconds();
document.write("toi da song " + seconds + " giay <br>");