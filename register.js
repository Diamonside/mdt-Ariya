

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
   /* var user = document.forms["myForm"]["firstname"];
    var pw = document.forms["myForm"]["password"];
    var rpw = document.forms["myForm"]["password"];

    if (pw.value != rpw.value)
    {
        error.innerHTML = ".....";
        return false;
    }
*/

var In;
var em;
var bd;
var user;
var password;
var repassword;


window.onload = pageLoad;
function pageLoad(){

    In = document.getElementById("in");
    em = document.getElementById("em");
    bd = document.getElementById("bd");
    user = document.getElementById("user");
    password = document.getElementById("pw");
    repassword = document.getElementById("rpw");
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;

}


function validateForm() 
{
    if(In.value==""||bd.value==""||em.value==""||user.value=="")
    {
        return false;  
    } 


    if(password.value != repassword.value)
    {   alert("กรุณากรอกให้ครบ");
        return false;  
    } 



}