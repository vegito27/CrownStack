
let container=document.querySelector('.container')

var button1 = document.querySelector('.button');

var currentSide ;


button1.addEventListener('change',()=>{

	var checkedButton = button1.querySelector(':checked').value;

	// console.log(checkedButton.value);

	var rotatingSide='animate-' + checkedButton

	console.log(rotatingSide)

	if(currentSide){

		container.classList.remove(currentSide)
	}

	  container.classList.add( rotatingSide );
	  
	  currentSide = rotatingSide;

})

	

		
