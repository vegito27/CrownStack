$(window).on("scroll", function() {
	
	 if($(window).scrollTop() > 50) {


        $(".header").addClass("active");
    }
     else {
        
       $(".header").removeClass("active");
    }
});



// function scroll(){
// 		window.addEventListener('DOMContentLoaded',()=>{

// 			if(window.scrollY()>50){

// 				document.querySelector('.header').classList.add('active')

// 			}

// 			else{

// 				document.querySelector('.header').classList.remove('active')

// 			}
// 		})
// 	}


// scroll()	
