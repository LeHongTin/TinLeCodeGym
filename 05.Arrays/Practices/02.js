var x = [-3,5,1,3,2,10];
document.write(x+"<br/>" +"Dao Nguoc La: <br/>");;
var first = 0;
var last = x.length - 1;
while (first<last) {
    var b=x[first];
    x[first]=x[last];
    x[last]=b;
    first++;
    last--;
}
document.write(x);