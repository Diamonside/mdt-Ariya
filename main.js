var count = 1;
function postFunction()
{
    var text1 = document.getElementById("post1");
    var text2 = document.getElementById("reply1");
    var text3 = document.getElementById("reply2");
    var textbox = document.getElementById("text1");
   
   switch (count){
       case 1: text1.innerText=textbox.value; break;
       case 2: text2.innerText=textbox.value; break;
       case 3: text3.innerText=textbox.value; break;
       default: break;
   }
  textbox.value="";
    count++;

}

function clearFunction()
{
    var text1 = document.getElementById("post1");
    var text2 = document.getElementById("reply1");
    var text3 = document.getElementById("reply2");
    count = 1;
    
    text1.innerText="";
    text2.innerText="";
    text3.innerText="";
    textbox.value="";
}