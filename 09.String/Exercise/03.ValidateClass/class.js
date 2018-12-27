function validateClass(Class) {
    var pattern = /^[ACP][0-9]{4}[GIKLM]{1}$/
    if (pattern.test(Class)) {
        return true;
    }
    return false;
}
var class1="C0318K";
console.log(validateClass(class1));