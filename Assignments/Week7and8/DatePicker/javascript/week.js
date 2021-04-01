function WeekDays(){

	days.forEach(day=>{

		let div=document.createElement('div')

		div.setAttribute('class','grid-item active-week')

		let node=document.createTextNode(day)

		div.appendChild(node)

		GET('#years').appendChild(div)

	})
}

WeekDays()

function DateChange(){

	let current=document.querySelector('.active-red')

	let next=current.nextSibling

	if(next){

		current.classList.remove('active-red')
		next.classList.add('active-red')

		lastActiveGrid++;
		currentDate++;
		currentActiveGrid++;

		obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth+1,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}
		setCurretDate(obj)

	}

	console.log('hello')


}