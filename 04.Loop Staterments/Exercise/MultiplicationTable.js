var sout;
     sout = "<table border='1' width='300' cellspacing='0' cellpadding='10'>"
     for (var j = 1; j <= 10; j++) {
         sout = sout + "<tr>";
         for (var i = 2; i <= 9; i++) {
             sout = sout + "<td>" + i +"*"+j+ "="+ i * j + "</td>";
         }
         sout = sout + "</tr>";
     }
     sout = sout + "</table>";
     document.write (sout);