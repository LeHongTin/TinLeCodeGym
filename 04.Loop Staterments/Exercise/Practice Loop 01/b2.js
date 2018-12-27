var T = parseInt(prompt("Nhập nhiệt độ hiện tại"));
if (T > 100) {
    document.write('Giảm nhiệt độ');
} else if (T < 20) {
    document.write("Tăng nhiệt độ");
} else document.write("Nhiệt độ phù hợp");