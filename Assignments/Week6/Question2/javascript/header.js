function scroll(){

	document.addEventListener('scroll',()=>{

		if(window.scrollY>=50){

			//normal
			document.querySelector('.header').classList.remove('header-transparent')
			document.querySelector('.header').classList.add('header-normal')
	
		}

		else{
			//transparent

			document.querySelector('.header').classList.remove('header-normal')

			document.querySelector('.header').classList.add('header-transparent')


		}
	})
}


scroll()


let hide=()=>{


	let element=document.querySelector('.menucontainer')

	let openbutton=document.querySelector('.opt')



	let closebutton=document.querySelector('#close')


	openbutton.addEventListener('click',()=>{


		element.classList.add("show")

		openbutton.classList.remove('opt')

		// document.getElementById('#open').style.display="none"

		closebutton.classList.add('opt')
		
	})



	closebutton.addEventListener('click',()=>{
	
		element.classList.remove("show")
		element.classList.add("show1")
		
		openbutton.classList.add('opt')

		closebutton.classList.remove('opt')

	})
}

hide()



// $(window).on("scroll", function() {
	
// 	 if($(window).scrollTop() > 50) {


//         $(".header").addClass("active");
//     }
//      else {
        
//        $(".header").removeClass("active");
//     }
// });




	
