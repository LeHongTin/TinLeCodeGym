function validateTelephoneNumber(number) {
    var pattern = /^\([0-9]{2}\)[-]\([0]{1}[0-9]{9}\)$/
    if (pattern.test(number)) {
        return true;
    }
    return false;
}
var number1 = "(84)-(012345678923)";
console.log(validateTelephoneNumber(number1));
document.write(validateTelephoneNumber(number1));