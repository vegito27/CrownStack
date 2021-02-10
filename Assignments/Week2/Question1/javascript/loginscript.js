const validate=()=>{

	const email1=document.getElementById('mail').value
	
	const password1=document.getElementById('pass').value

	let isValid=true

	// if email Empty 
	if(email1===null || email1==='' ){
		document.getElementById('email').style.display="block";
		return false;
	}

	//if password is empty

	if(password1==='' || password1===null ){
		document.getElementById('password').style.display="block";
		return false
	}

	// if database is empty
	let users=JSON.parse(localStorage.getItem('data'))

	if(users===null){
		document.getElementById('email').innerHTML="User does not exists,Please Register"

		document.getElementById('email').style.display="block";

		return false;

	}
	
	//retrieving the user

	let isUser=false

	for(let i=0;i<users.length;i++){

		let user=users[i];
		console.log(user)

		// if email and password matches

		if(user.email===email1 && user.password==password1){
			user.message=false
			localStorage.setItem("shouldOpen",true)
			isUser=true
			localStorage.setItem("data",JSON.stringify(users))
			return true
		}

		// only email matches and password not matches
		else if(user.email===email1 && user.password!=password1){

			let pass=document.getElementById('password')
			isUser=false
			pass.innerHTML="Please Enter the correct Password"
			pass.style.display="block";
			return false
		}

	}
	//if email not found
	
	if(!isUser){

		let email=document.getElementById('email')
		email.innerHTML="Email does not exists!!"
		email.style.display="block";
		return false
	}

	return false

}