var close = document.getElementsByClassName("closebtn");
		
  close[0].onclick = function(){

    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.classList.add('hideButton');  sessionStorage.setItem('token',false);}, 600);
    // localStorage.setItem("showHeader","false")	
}


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
	