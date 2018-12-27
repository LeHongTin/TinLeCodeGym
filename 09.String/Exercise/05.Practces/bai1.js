function validateZipCode(code) {
    pattern = /[0-2]{0,1}[0-9]{1}\/[0,1]{0,1}[0-9]{1}\/[1]{0,1}[0-9]{3}$/;
    if (pattern.test(code)) {
        return true;
    }
    return false;
}
var code1= "6/2/1999"
console.log(validateZipCode(code1));
document.write(validateZipCode(code1));
