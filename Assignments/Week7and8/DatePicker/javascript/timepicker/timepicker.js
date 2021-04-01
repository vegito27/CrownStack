// let GET=document.querySelector.bind(document)

const time_picker_element=GET('.time-picker')

const min_element=GET('.time-picker .minute .min')
const hr_element=GET('.time-picker .hour .hr')


const hr_up=GET('.time-picker .hour .hr-up')
const hr_down=GET('.time-picker .hour .hr-down')


const min_up=GET('.time-picker .minute .min-up')
const min_down=GET('.time-picker .minute .min-down')


let hour=0;
let minute=0;


hr_up.addEventListener('click',hourUp)
hr_down.addEventListener('click',hourDown)

min_up.addEventListener('click',minuteUp)
min_down.addEventListener('click',minuteDown)


min_element.addEventListener('change',minuteChange3)
hr_element.addEventListener('change',hourChange2)



function hourUp(){
	hour++;

	if(hour>11){
		hour=0
		meridianChange()
	}

	setTime()
	updateDate(obj,TIME)
}

function hourDown(){

	hour--;

	if(hour<0){

		hour=11
		meridianChange()
	}

	setTime()
	updateDate(obj,TIME)
}

function minuteUp(){

	minute++;

	if(minute>59){

		minute=0;

		if(hour==11){

			hour=0
			if(GET('.meridian div#mer').innerHTML=="PM"){
					DateChange()
				}

				meridianChange()

		}else if(hour<11){

			hour++
		}
		
	}
	
	setTime()
	updateDate(obj,TIME)

}

function minuteDown(){

	minute--;

	if(minute<0){

		minute=59;

		if(hour>0){

			hour--;

		}else{
			meridianChange()
			hour=11
		}
	}

	setTime()
	updateDate(obj,TIME)

}

function setTime(){

	hr_element.value=formatTime(hour)
	min_element.value=formatTime(minute)
	time_picker_element.dataset.time=formatTime(hour)+":"+formatTime(minute)

	TIME=time_picker_element.dataset.time.toString()

}


function getTimeChange(){

	TIME=time_picker_element.dataset.time.toString()
}


function formatTime(time){
	if(time<10){
		time='0'+time
	}
	return time
}

function hourChange2(e){

	let str=e.target.value.toString()

	if(str=="00"){
		e.target.value='00'
		hour=0
		getTimeChange()
		setTime()
		updateDate(obj,TIME)
		return
	}

	if(str.length>2){
		hr_element.value=11
		hour=11
		getTimeChange()
		setTime()	
		updateDate(obj,TIME)
		return
	}
	else if(e.target.value===''){
		getTimeChange()
		e.target.value="0"		

	}
	else if(e.target.value>11){
		getTimeChange()
		e.target.value=11

	}else if(e.target.value<0){
		getTimeChange()
		e.target.value='00'
	}
	
	else if(e.target.value>0 && e.target.value<=9){
	
		if(hr_element.value[0]=="0"){
			hour=e.target.value[1]
			setTime()
			getTimeChange()
			updateDate(obj,TIME)
			return
		}
		else{
			
			hour=e.target.value
			setTime()
			hr_element.value=e.target.value;
			getTimeChange()
			updateDate(obj,TIME)
			return
		}
	}

	hour=e.target.value
	getTimeChange()
	setTime()
	updateDate(obj,TIME)

}




function minuteChange3(e){

	let str=e.target.value.toString()


	if(str=="00"){
		e.target.value='00'
		minute=0
		getTimeChange()
		setTime()
		updateDate(obj,TIME)
		return
	}

	if(str.length>2){
		min_element.value=59
		minute=59
		getTimeChange()
		setTime()	
		updateDate(obj,TIME)
		return
	}
	else if(e.target.value===''){
		getTimeChange()
		e.target.value="0"		

	}
	else if(e.target.value>59){
		getTimeChange()
		e.target.value=59

	}else if(e.target.value<0){
		getTimeChange()
		e.target.value='00'
	}
	
	else if(e.target.value>0 && e.target.value<=9){
	
		if(min_element.value[0]=="0"){
			minute=e.target.value[1]
			setTime()
			getTimeChange()
			updateDate(obj,TIME)
			return
		}
		else{
			
			minute=e.target.value
			setTime()
			min_element.value=e.target.value;
			getTimeChange()
			updateDate(obj,TIME)
			return
		}
	}

	minute=e.target.value
	getTimeChange()
	setTime()
	updateDate(obj,TIME)

}

GET('.meridian .mer-up').addEventListener('click',meridianChange)

GET('.meridian .mer-down').addEventListener('click',meridianChange)


function meridianChange(){

	let a=GET('.meridian div#mer')


	if(GET('.meridian div#mer').innerHTML=="AM"){

		GET('.meridian div#mer').innerHTML="PM"

		// updateDate(obj,TIME)


	}else if(GET('.meridian div#mer').innerHTML=="PM"){
		
		GET('.meridian div#mer').innerHTML="AM"
		// updateDate(obj,TIME)

	}else{

		GET('.meridian div#mer').innerHTML="AM"
		// updateDate(obj,TIME)

	}
}

