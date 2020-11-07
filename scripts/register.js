function validate(){
	childname = document.myform.inputcname.value;
	password = document.myform.pass.value;
    age = document.myform.age.value;
    
	if(childname ==null){
		alert("This field is required. Enter your child's name.");
        document.myform.inputcname.focus();
    }
	 else if (password ==""||(!password.match(/[A-Z]/))){
	 	alert("enter your password");
	 	document.myform.pass.value="";
	 	document.myform.pass.focus();
	 }else if (age ==""||isNaN(age)){
	 	alert("enter your age");
	 	document.myform.age.value="";
	 	document.myform.age.focus();
	}else if(document.myform.gender[0].checked==""
			&&document.myform.gender[1].checked==""){
	 	alert("enter gender");
		document.myform.gender[0].focus();
    }
    else{
	 	alert("You are registered");
	 	document.myform.onsubmit();
	 }
}	

function validate(){
    alert("Thank you. Your child has been registered successfully! We will reach out to you soon.");
}
