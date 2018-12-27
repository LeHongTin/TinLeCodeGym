function count(arr, data) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            count++
        }
    }
    return count;
}

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}

nums.sort(function (a, b) {
    return a - b;
});

for (var i = 0; i < 100; i++) {
    if (i > 0 && i % 10 == 0) {
        document.write("<br>")
    }
    document.write(nums[i] + " ");
}

var data = parseInt(prompt("nhap so can dem:"));
var count = count(nums, data);

document.write("<br> so lan xuat hien" + data + "la:" + count)
