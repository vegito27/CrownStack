
function updateDate(obj1,time){

	if(obj1){

		if(obj1.monthIDX.toString().length<2){
			obj1.monthIDX='0'+obj1.monthIDX
		}

		if(obj1.date.toString().length<2){
			obj1.date='0'+obj1.date
		}

		let dateUTC=obj1.day+' '+obj1.year+'-'+obj1.monthIDX+'-'+obj1.date;

		if(time){

			dateUTC+=' '+`${time}`+' '+`${GET('#mer').innerHTML}`

			console.log(dateUTC)
		}
		else{
			console.log(dateUTC+" "+"00:00 "+`${GET('#mer').innerHTML}` )
		}
		

	}else{

		console.log(new Date())

	}


} 


