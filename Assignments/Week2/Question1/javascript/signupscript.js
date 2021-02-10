const hide=id=>	document.getElementById(id).style.display="none";

const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const passwordformat=/^(.{0,8}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/	


 SignUp=()=>{

 	let isvalid=true;

 	let object={

		username:document.getElementById('user').value,
		email:document.getElementById('mail').value,
		mobile:document.getElementById('phone').value,
		gender:Gender=document.getElementById('gender').value,
		password:document.getElementById('pass').value,
		password2:document.getElementById('pass2').value
			
	}

	if(object.username==='' || object.username==null){
		document.getElementById('username').style.display="block";
		isvalid=false

	}

	if(object.email==='' || object.email==null){
		document.getElementById('email').style.display="block";
		isvalid=false
	}

	if (mailformat.test(object.email)===false ) {	  
	  document.getElementById("email").innerHTML="Please enter the correct email"
      document.getElementById("email").style.display="block";
      isvalid=false

    }


    if(mailformat.test(object.email)===true){

    	let data=JSON.parse(localStorage.getItem('data'))

    	let isFind=data.find(user=>user.email===object.email)

    	if(isFind){

		    document.getElementById("email").innerHTML="Email Already Exists,Use Different Email"
		    document.getElementById("email").style.display="block";
		    return false
    	}
    }
	
	if(object.mobile==='' || object.mobile==null){
		document.getElementById('mobile').style.display="block";
		isvalid=false	
	}
	
	if(object.password==='' || object.password==null){
		document.getElementById('password').style.display="block";
		isvalid=false
		
	}else{

		if(object.password.length<9){
			document.getElementById('password').innerHTML="Password length should be atleast 9";
			document.getElementById('password').style.display="block";
			isvalid=false

		}else if(passwordformat.test(object.password)){
			document.getElementById('password').innerHTML="Password must contain A-Z,a-z,0-9,and special symbol";
			document.getElementById('password').style.display="block";
			isvalid=false
		
		}

	}
	
	if(object.password2==='' || object.password2==null){
		document.getElementById('password2').style.display="block";
		isvalid=false	
	}

	if(object.password===object.password2 && isvalid==true){

		if(localStorage.getItem('data')===null){

			localStorage.setItem('data','[]')
		}



		let previous_data=JSON.parse(localStorage.getItem('data'))
		localStorage.setItem("shouldOpen",true);

		object.login=true
		object.message=true

		// // previous_data.find(data=>data.email===object.email)){

		// 	document.getElementById("email").innerHTML="Email Already Exists"
		// 	document.getElementById("email").style.display="block";

		// 	return false

		previous_data.push(object)

		localStorage.setItem('data',JSON.stringify(previous_data))

		return true;

     }


     else if(password!==password2 && isvalid==true){

     	document.getElementById("pass2").style.display="Please Enter the correct password";

	 	document.getElementById("password2").style.display="block";

	 	return false;

    }else{

      return false;
    
    }

}








