function AppendMonth(MONTHS){

	let div=document.createElement('div')

	div.setAttribute('class','center new-month')

	let node=document.createTextNode(MONTHS[currentMonth])

	div.appendChild(node)

	GET('#months').appendChild(div)

}

AppendMonth(MONTHS)


function AppendYear(currentYear){

	let div=document.createElement('div')

	div.setAttribute('class','center')

	let node=document.createTextNode(currentYear)

	div.appendChild(node)

	GET('#year-selector').appendChild(div)


}

AppendYear(currentYear)