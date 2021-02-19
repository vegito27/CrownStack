$(document).ready(function(){

	$('.logo-area').slick({
		slidesToShow:5,
		slidesToScroll:6,
		autoplay:true,
		autoplaySpeed:1000,
		arrows:false,
		dots:false,
		pauseOnHover :true,
		responsive:[
		{	breakpoint:768,
			settings:{ slideToShow:4 }


		},{
			breakpoint:520,
			settings:{slidesToShow:3}
		}]

	})
})

// $(document).ready(function(){

// $('.logo-area').slick({
// 	slidesToShow:5,
// 	slidesToScroll:6,
// 	autoplay:true,
// 	autoplaySpeed:500,
// 	arrows:false,
// 	dots:false,
// 	pauseOnHover :false,
// 	responsive:[
// 	{	breakpoint:768,
// 		settings:{ slideToShow:4 }


// 	},{
// 		breakpoint:520,
// 		settings:{slidesToShow:3}
// 	}]

// })
// })				
// 			

