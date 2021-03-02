$(document).ready(function(){

	$('.logo-area').slick({
		slidesToShow:5,
		slidesToScroll:4,
		autoplay:true,
		autoplaySpeed:1000,
		arrows:false,
		dots:false,
		pauseOnHover :true,
		responsive:[{
		breakpoint:768,
		settings:{ slideToShow:4 }

		},{
			breakpoint:540,
			settings:{slidesToShow:3}
		},
		{
			breakpoint:540,
			settings:{slidesToShow:3}
		}



		]

	})
})
