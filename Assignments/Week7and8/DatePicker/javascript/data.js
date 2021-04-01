
let GET=document.querySelector.bind(document)

let GETALL=document.querySelectorAll.bind(document)

let MAKE=document.createElement.bind(document)

let FILL=document.createTextNode.bind(document);

let currentMonth=new Date().getMonth()

let currentYear=new Date().getFullYear()

let currentDate=new Date().getDate()

let TIME;

let obj

let activeDate=currentDate

let MONTHS=['January',"February","March","April","May","June","July","August","September","October","November","December"]

let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]



function getSelectedDay(date){

	let gap=getFirstDay(currentYear,currentMonth)

	DAY=(gap+date)%7

	return DAY

}

obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth+1,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}

setCurretDate(obj)

