function getFirstDay(year,month){

	let date=new Date()

	var firstDay = new Date(year, month, 1);
	
	return firstDay.getDay()

}


function getLastday(){

	let date=new Date()

	var lastDay = new Date(year, date.getMonth() + 1, 0);

	return lastDay.getDay()
}



var getDaysInMonth = function(year,month) {
	return new Date(year, month+1, 0).getDate();
};



function Delete(){

	list=GET('#years')

	for(let j=list.childNodes.length-1;j>=0;j--){

		list.removeChild(list.childNodes[j])
	}
}


function setCurretDate(object){

	let date=object.date;
	let month=object.month
	let year=object.year
	let day=object.day

	GET('.block-year').innerHTML=year
	GET('.block-month').innerHTML=month
	GET('.block-date').innerHTML=date
	GET('.block-day').innerHTML=day

}
