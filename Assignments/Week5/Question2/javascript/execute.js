let current="bank1"


function execute(id){

	document.getElementById(current).style.display="none"


	document.getElementById(id).style.display="block";

	current=id

}