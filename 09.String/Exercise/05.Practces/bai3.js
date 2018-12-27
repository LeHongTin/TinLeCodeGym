var str = "Mot giay anh bang khoang hua voi long minh se the thoi";
var countVowel = 0;
var countConsonant = 0;

pattern = /^[a-zA-Z]$/
pattern1 = /^[ueoaiUEOAI]$/
for (var i = 0; i < str.length; i++) {
    if (pattern.test(str.charAt(i))) {
        if (pattern1.test(str.charAt(i))) {
            countVowel++;
        } else {
            countConsonant++;
        }
    }
}
console.log(countVowel);
console.log(countConsonant);
document.write("so nguyen am co trong day la : " + countVowel + "<br>");
document.write("so phu am co trong day la : " + countConsonant);
