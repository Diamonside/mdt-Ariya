
function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

 var id;
 var pass;
 var parameter;
window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()

	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
	parameter = getParams();
	console.log(parameter["username"]);
	console.log(parameter["password"]);
}
function checkLogin(){
	id = document.getElementById("username");
	pass = document.getElementById("password");
	if (parameter["username"]!=id.value || parameter["password"]!=pass.value ){
		alert("รหัสผ่านไม่ถูกต้อง");
		return false;
	}
	

/*
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var a = parameter["username"];
	var b = parameter["password"];
	var c = document.form["myLogin"]["username"].value;
	var d = document.form["myLogin"]["password"].value;


	if(a==c && b==d)
	{
	alert("Done!");
	}
	else{
		alert("Fail");
		return false;
	}*/
}


