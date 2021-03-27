
setTimeout(
  	function() {
                $('.alert').fadeOut('fast'); sessionStorage.setItem('token',false)
            }, 1000);


function Hide(){

	let loginT=document.querySelector('.pix')
	let isTrue=sessionStorage.getItem('token');

	if(!isTrue || isTrue==="false"  ){
		loginT.classList.add('pix');

	}else{

		loginT.classList.remove('pix');

	}

}

Hide()



const token=sessionStorage.getItem('token1')

	// console.log(token)

$.ajax({
	url: "https://netco-indo-test.nfrnds.net:20003/fmcg-dd/initialData",
	type: 'GET',
	headers: {"Netco-JWT": token},
	success:function(res){ 
	// console.log(res)

	}
});
