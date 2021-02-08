
var data=JSON.parse(localStorage.getItem('data'))

// checked whether user is coming via login page or signup page

if (data) {
    //user coming from signup page
	var userLogin=data.find(user=>user.login===true)
    
    // user coming from login page 
	var messageUser=data.find(user=>user.message===false)

}

// Display function for "userName" in nav bar

let display=user=>{

	document.getElementById('login').style.display="none"

	let name=document.getElementById('name')
	name.style.display="block"

	name.innerHTML=`Hi,${user.username}`

	document.getElementById('logout').style.display="block"

}

// if user is not login ,then do not display message line
if(userLogin===undefined && messageUser===undefined ){

	document.getElementById("close").style.display="none";
}

// message should not display after closing the message stripe
if(localStorage.getItem('shouldOpen')==="false"){
	document.getElementById("close").style.display="none";
}


// if either registered user or logined user exists then display message accordingly
if(userLogin || messageUser){

    // if user is coming from register page 
	if(userLogin && localStorage.getItem('shouldOpen')==="true" ){

		document.getElementById("close").innerHTML=`<span id="me"class="closebtn">&times;</span>  
													<strong>Success!</strong> Hi,You are Registered Successfully .`;
		
		document.getElementById("close").style.display="block";	
	
	}

    // if user is coming from login page
	if(messageUser && localStorage.getItem('shouldOpen')==="true" ){

		document.getElementById("close").innerHTML=`<span id="me"class="closebtn">&times;</span>  
													<strong>Success!</strong> Hi,You are Successfully Logged in.`;

		document.getElementById("close").style.display="block";
	
	}
	// if signedup user,then display name in navebar
	if(messageUser){
		display(messageUser)
	}
    
    // if login user,then display name in navebar
	if(userLogin){
		display(userLogin)
	}

}

// close the message stripe 

function close(){

		let close = document.getElementsByClassName("closebtn");

		console.log(close[0])

		close[0].onclick = function(){

		let div = this.parentElement;

		div.style.opacity = "0";

		setTimeout(()=>{ div.style.display = "none"; localStorage.setItem("shouldOpen",false); }, 60);
		
	}
}

// function to change navbar status after logout
let out=user=>{

	data.map(mail=>{
		if(mail.email===user.email){
				mail=user
			}
		})

	localStorage.setItem('data', JSON.stringify(data))

	document.getElementById('name').style.display="none"
	document.getElementById('logout').style.display="none"

	document.getElementById('login').innerHTML="Login"
	document.getElementById('login').style.display="block"
	location.reload();

}

// which user to be logged out ,signedUp user or loggedin user

function logout(){

	if(messageUser){
		messageUser.message=true
		out(messageUser)
	}

	if(userLogin){
		userLogin.login=false
		out(userLogin)
	}

}



