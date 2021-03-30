
const GET = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


$('#userEmail').focus(()=>{

	$('#redemail').css('visibility','hidden')

})


GET('#place-order').addEventListener('click',()=>{

	let EMAIL=GET('#userEmail').value

	let USER_NAME=GET('#userName').placeholder

	console.log(USER_NAME)

	let PHONE=GET('#phone').placeholder


	if(EMAIL==null || EMAIL==""){

		console.log(EMAIL)

		GET('#redemail').style.visibility="visible"
		console.log("Please Enter the Email***")
		return false

	}

	else if(!validateEmail(EMAIL)){

		GET('#redemail').innerHTML="Please Enter a valid Email****"

		GET('#redemail').style.visibility="visible"

		return false
	}

	let LOCATION;

	if(localStorage.getItem('location')){

		LOCATION=JSON.parse(localStorage.getItem('location'))

	}

	if(!LOCATION){
		GET('#location-button').style.color="white"
		GET('#location-button').style.backgroundColor="red"
		GET('#location-button').innerHTML="Please Add Location to continue.."

	}

	let USER_DETAILS=JSON.parse(localStorage.getItem('user'))

	 var whsID = sessionStorage.getItem('whsId');
	 var outletID = sessionStorage.getItem('ouletId')
	 console.log(outletID)

	let userDetails={
		name:USER_DETAILS.fullName,
		email:EMAIL,
		phone_number:USER_DETAILS.msisdn,
		locaton:LOCATION
	}

	let CART_ITEMS=JSON.parse(localStorage.getItem('storage'))

	let FinalReponse={}

	if(CART_ITEMS){

		FinalReponse.items=CART_ITEMS
	}

	FinalReponse.user_details=userDetails

	FinalReponse.total_price=sessionStorage.getItem('TOTAL_PRICE')

	FinalReponse.whsOrgId=whsID

	FinalReponse.outletId=outletID

	FinalReponse.user_id=USER_DETAILS.userId

	console.log(FinalReponse)

	if(LOCATION && CART_ITEMS && outletID && whsID && userDetails){

		 // window.location.href="./app.html"

	}


})