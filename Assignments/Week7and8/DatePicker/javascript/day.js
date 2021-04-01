
function updateDate(obj1,time){

	if(obj1){

		if(obj1.month.toString().length<2){
			obj1.month='0'+obj1.month
		}

		if(obj1.date.toString().length<2){
			obj1.date='0'+obj1.date
		}

		let dateUTC=obj1.day+' '+obj1.year+'-'+obj1.month+'-'+obj1.date;

		if(time){

			dateUTC+=' '+`${time}`+' '+`${GET('#mer').innerHTML}`

			console.log(dateUTC)
		}
		else{
			console.log(dateUTC+" "+"00:00 AM" )
		}
		

	}else{

		console.log(new Date())

	}


} 


