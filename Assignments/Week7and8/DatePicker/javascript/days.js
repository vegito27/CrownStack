
function AppendDates(){

	// console.log(MONTHS[currentMonth])

	let gap=getFirstDay(currentYear,currentMonth)

	let days=getDaysInMonth(currentYear,currentMonth)


	for(let j=0;j<gap;j++){
		let div=document.createElement('div')

		div.setAttribute('class','grid-item active')

		let node=document.createTextNode('x')

		div.appendChild(node)

		GET('#years').appendChild(div)

	}

	for(let i=1;i<=days;i++){

		let div=document.createElement('div')

		if(i==currentDate){

			div.setAttribute('class','grid-item-days active-red')
			div.setAttribute('index',i)
		
		}else{

			div.setAttribute('class','grid-item-days')
			div.setAttribute('index',i)
		}

		let node=document.createTextNode(i)

		div.appendChild(node)

		GET('#years').appendChild(div)

	
	} 

		AddEventListener()

}
		
AppendDates()

