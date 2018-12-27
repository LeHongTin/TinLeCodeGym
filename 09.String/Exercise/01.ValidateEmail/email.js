
function checkEmail(email) {
    var pattern = /\S+@\S+\.\S+/;
    if(pattern.test(email)) {
        return true;
    }
    return false;
}
var email1="a@google";
console.log(checkEmail(email1));