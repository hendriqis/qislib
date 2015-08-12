//example indexOf
/*
var str="Hello world!";
document.write(str.indexOf("d") + "<br />");
document.write(str.indexOf("WORLD") + "<br />");
document.write(str.indexOf("world"));

//output 
10
-1
6 
*/

//example indexOf
/*
var str="Hello world!";
document.write(str.substring(3)+"<br />");
document.write(str.substring(3,7));

//output
lo world!
lo w 
*/

function Left(str, n){
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}