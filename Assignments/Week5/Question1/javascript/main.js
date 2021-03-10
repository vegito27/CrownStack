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

// scroll()



let scroll2=()=>{

	document.addEventListener('scroll',()=>{

		if(window.scrollY>=50){

			//normal
			// document.querySelector('.image').classList.toggle('active')

			document.querySelector('.image1').classList.add('active')
			document.querySelector('.image2').classList.remove('active')
			document.querySelector('.header').classList.add('normal-header')

		}

		else{
			//transparent

			if(window.innerWidth>=769){

				document.querySelector('.image2').classList.add('active')
				document.querySelector('.image1').classList.remove('active')



				document.querySelector('.header').classList.remove('normal-header')

			}else{

				document.querySelector('.image1').classList.add('active')
				document.querySelector('.image2').classList.remove('active')

				document.querySelector('.header').classList.add('normal-header')

	
			}

		}
	})
}


scroll2()


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



let answer=()=>{

	if(window.innerWidth<=769){

		document.querySelector('.image1').classList.add('active')
		document.querySelector('.image2').classList.remove('active')

		document.querySelector('.header').classList.add('normal-header')


	}
	else{

		if(window.scrollY<=50){

		document.querySelector('.image2').classList.add('active')
		document.querySelector('.image1').classList.remove('active')
		document.querySelector('.header').classList.remove('normal-header')
	}

	}
}



window.addEventListener('resize',answer)












