var tong = 0;
for (i = 0; i < 7 * 30 + 1; i++) {
    if (i % 7 == 0) {
        tong += i;
    }
}
document.write("tong la:", tong);