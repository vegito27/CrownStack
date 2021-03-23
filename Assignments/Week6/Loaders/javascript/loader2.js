
var from;

$('button').click(function() {

	 var rand = 100

	var x = document.querySelector('.progress-circle-prog');
	console.log(x);

	x.style.strokeDasharray = (rand * 4.65) + ' 999';

	var el = document.querySelector('.progress-text'); 
	console.log(el);

	from = $('.progress-text').data('progress');


	$('.progress-text').data('progress', rand);

	var start = new Date().getTime();
  
	setTimeout(function() {

	    var now = (new Date().getTime()) - start;

	    var progress = now / 700;

		  result = rand > from ? Math.floor((rand - from) * progress + from) : Math.floor(from - (from - rand) * progress);

	    el.innerHTML = progress < 1 ? result+'%' : rand+'%';

	    if (progress < 1) setTimeout(arguments.callee, 10);

	}, 10);

	console.log(from);

	
	}

)
