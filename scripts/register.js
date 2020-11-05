function validate(){
	childname = document.getElementById("inputcname").value;
	password = document.myform.pass.value;
    age = document.myform.age.value;
    
	if(childname ==""){
		alert("This field is required. Enter your child's name.");
        //document.getElementById("inputcname").focus();
    }
	// else if (password ==""||(!password.match(/[A-Z]/))){
	// 	alert("enter your password");
	// 	document.myform.pass.value="";
	// 	document.myform.pass.focus();
	// }else if (age ==""||isNaN(age)){
	// 	alert("enter your age");
	// 	document.myform.age.value="";
	// 	document.myform.age.focus();
	// }else if(document.myform.gender[0].checked==""
	// 		&&document.myform.gender[1].checked==""){
	// 	alert("enter gender");
	// 	document.myform.gender[0].focus();
    // }
    else{
	 	alert("You are registered")
	 	document.myform.submit();
	 }
}	