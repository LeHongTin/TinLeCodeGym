var telephonenumb = [
    "0934828743",
    "0905284043",
    "0976677776",
    "0973737373",
    "0905545355",
    "0933830353",
    "0966777888",
    "0977555666",
    "0988778899",
    "42897472364"
];
document.write("Danh sach sdt : " + "<br>")
for (var i = 0; i < telephonenumb.length; i++) {
    document.write(telephonenumb[i] + "<br>")
}
pattern1 = /^[0]{1}[9]{1}[678]{1}[0-9]{7}$/;
pattern2 = /^[0]{1}[9]{1}[03]{1}[0-9]{7}$/;
document.write("**********phan loai*************<br>")
for (var i = 0; i < telephonenumb.length; i++) {
    if (pattern1.test(telephonenumb[i])) {
        document.write(telephonenumb[i] + "viettel" + "<br>");
    } else if (pattern2.test(telephonenumb[i])) {
        document.write(telephonenumb[i] + "mobiphone" + "<br>");
    } else {
        document.write("so khong hop le :" + telephonenumb[i])
    }
}