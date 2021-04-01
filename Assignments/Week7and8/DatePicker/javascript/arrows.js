

GET('.right-arrow').addEventListener('click',()=>{

	let currentMonthIndex=currentMonth	
	currentActiveGrid=1;

	if(currentMonthIndex==11){
		currentMonth=0
		currentYear++
		GET('#year-selector').innerHTML=currentYear

	}else{

		currentMonth++;
	}

	GET('.new-month').innerHTML=MONTHS[currentMonth]

	obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth+1,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}
	setCurretDate(obj)

	Delete()

	WeekDays()

	AppendDates()

	updateDate(obj,TIME)

})


GET('.left-arrow').addEventListener('click',()=>{

	let currentMonthIndex=currentMonth;

	console.log(currentMonth)
	currentActiveGrid=1;

	if(currentMonthIndex==0){

		currentMonth=11
		currentYear--;
		GET('#year-selector').innerHTML=currentYear


	}else{
		currentMonth--;
	}


	GET('.new-month').innerHTML=MONTHS[currentMonth]

	obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth+1,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}
	setCurretDate(obj)

	Delete()

	WeekDays()

	AppendDates()
	updateDate(obj,TIME)

})



GET('.month-right-arrow').addEventListener('click',()=>{

	let currentYearIndex=currentYear
	currentActiveGrid=currentDate;

	console.log(currentYear)	

	if(currentYearIndex==2030){
		return

	}else{

		currentYear++;
	}

	GET('#year-selector').innerHTML=currentYear

	obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth+1,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}
	setCurretDate(obj)

	Delete()

	WeekDays()

	AppendDates()
	updateDate(obj,TIME)

})



GET('.month-left-arrow').addEventListener('click',()=>{

	let currentYearIndex=currentYear

	console.log(currentYear)
	currentActiveGrid=currentDate;	

	if(currentYearIndex==1970){
		return

	}else{

		currentYear--;
	}

	GET('#year-selector').innerHTML=currentYear

	obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth+1,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}
	setCurretDate(obj)

	Delete()

	WeekDays()

	AppendDates()
	updateDate(obj,TIME)

})


