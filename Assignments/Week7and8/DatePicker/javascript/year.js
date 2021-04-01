function AppendYears(start,end){

	for(let i=start;i<=end;i++){

		let div=document.createElement('div')

			if(i==1){
				div.setAttribute('class','current-year')

				div.setAttribute('class','active')
			}else{

				div.setAttribute('class','current-year')
		}

		let node=document.createTextNode(i)

		div.appendChild(node)

		GET('#dates').appendChild(div)

	}
}

AppendYears(1970,2030)


GET('#dates').addEventListener('change',(e)=>{

	if(e.target.value>2030 || e.target.value<1970){

		e.target.value=new Date().getFullYear()


		currentYear=e.target.value;
	}
	else{
		currentYear=e.target.value;
	}

})




