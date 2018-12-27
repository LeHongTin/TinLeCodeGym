var str = "Mot giay anh bang khoang hua voi long minh se the thoi";
var count = 0;
pattern = /^[a-zA-Z]$/
for (var i = 0; i < str.length; i++) {
    if (pattern.test(str.charAt(i))) {
        count++;
    }
}
console.log(count);
document.write("so chu cai co trong day la : " + count);