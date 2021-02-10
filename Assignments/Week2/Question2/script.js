
let p1=false;

const hide=()=>{

	let toggleButton=document.getElementById('alpha')

	let navbarLinks=document.getElementById('menu') 

			if(p1===false){
		
				toggleButton.style.display="block";
				p1=true
		
			}else{

				toggleButton.style.display="none";
				p1=false

		}


}

function refresh() { location.reload(); }


