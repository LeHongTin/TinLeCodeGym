function vallidateAccount(account) {
    var pattern = /^[a-z0-9_]{6,}$/
    if (pattern.test(account)) {
        return true;
    }
    return false;
}
var account1 = "______";
var account2 = "Lehongtin"
console.log(vallidateAccount(account1));
console.log(vallidateAccount(account2));