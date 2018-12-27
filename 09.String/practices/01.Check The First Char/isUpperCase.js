function isFirstLetterUpperCase(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
       console.log("String's first character is uppercase");
       document.write("String's first character is uppercase" + "<br>");
    } else {
       console.log("String's first character is not uppercase");
       document.write("String's first character is not uppercase");
    }
 }
 isFirstLetterUpperCase('Le HongTin');
 isFirstLetterUpperCase('le hong tin');