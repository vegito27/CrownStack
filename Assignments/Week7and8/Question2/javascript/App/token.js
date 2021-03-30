
const get=sessionStorage.getItem("token1")

$.ajaxSetup({
    headers: { "Netco-JWT": `${get}` }
});


function getUser(){

	$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/user',(response,status)=>{

		localStorage.setItem('user',JSON.stringify(response))

		console.log(response)

		var phoneNumber=response.msisdn.toString().slice(-10)

		// console.log(phoneNumber)

	})
}

getUser()
