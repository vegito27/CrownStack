
function addQuantity(el) {
//get value  div and change value there

	console.log(el)

	productQuantityArray=JSON.parse(sessionStorage.getItem('productQuantity'))

	TOTAL_PRICE=parseFloat(sessionStorage.getItem('TOTAL_PRICE'))

	console.log(typeof(TOTAL_PRICE))

	if(!TOTAL_PRICE){
		TOTAL_PRICE=0
	}

	// console.log(productQuantityArray)


	let y=parseInt($(el).siblings(".value").html()) + 1

	let id=$(el).attr('id')

	let ID=id.split('product')[1]

	let productName=$(`#name${ID}`).html()

	let priceId="price"+id.split('product')[1]

	// console.log(priceId)

	let PRICE=parseFloat($(`#${priceId}`).html())

	// console.log($('#price60').html())
	// console.log(PRICE)

	TOTAL_PRICE+=PRICE

	if(productQuantityArray[id]){

		productQuantityArray[id]={qnty:y}

		$('.cart-items b').html(Object.keys(productQuantityArray).length)
		sessionStorage.setItem("TOTAL_PRICE",TOTAL_PRICE)
		$('.total-price span').html(TOTAL_PRICE)
		$('.cart-option').show()
	
	}else{
	
		productQuantityArray[id]={qnty:y}

		$('.cart-items b').html(Object.keys(productQuantityArray).length)
		sessionStorage.setItem("TOTAL_PRICE",TOTAL_PRICE)
		$('.total-price span').html(TOTAL_PRICE)
		$('.cart-option').show()

	}

	let p=JSON.stringify(productQuantityArray)

	sessionStorage.setItem('productQuantity',p)

	$(el).siblings(".value").html(y)

	showTotal()

	modifiedArray()

}


function removeQuantity(el) {

	productQuantityArray=JSON.parse(sessionStorage.getItem('productQuantity'))

	TOTAL_PRICE=parseFloat(sessionStorage.getItem('TOTAL_PRICE'))

	// console.log(typeof(TOTAL_PRICE))

	if(!TOTAL_PRICE){
		TOTAL_PRICE=0
	}

	let x=parseInt($(el).siblings(".value").html()) - 1;

	let id=$(el).attr('id')

	let priceId="price"+id.split('product')[1]

	let PRICE=parseFloat($(`#${priceId}`).html())

	
	if(x>=0){

		$(el).siblings(".value").html(x)

		if(productQuantityArray[id]){

			if(x==0){

				delete productQuantityArray[id]
				TOTAL_PRICE-=PRICE

				$('.cart-items b').html(Object.keys(productQuantityArray).length)
				sessionStorage.setItem("TOTAL_PRICE",TOTAL_PRICE)
				$('.total-price span').html(TOTAL_PRICE)
				$('.cart-option').show()
			
			}else{
				TOTAL_PRICE-=PRICE

				productQuantityArray[id]={qnty:x}
				$('.cart-items b').html(Object.keys(productQuantityArray).length)
				sessionStorage.setItem("TOTAL_PRICE",TOTAL_PRICE)
				$('.total-price span').html(TOTAL_PRICE)
				$('.cart-option').show()
			}

	
		}else{
			TOTAL_PRICE-=PRICE

			productQuantityArray[id]={productId:id.split('product')[1],qnty:x,price:PRICE}
			sessionStorage.setItem("TOTAL_PRICE",TOTAL_PRICE)
			$('.total-price span').html(TOTAL_PRICE)
			$('.cart-option').show()

		}

		let p=JSON.stringify(productQuantityArray)

		sessionStorage.setItem('productQuantity',p)

	}
	showTotal()

	modifiedArray()

}



function modifiedArray(){

	let responseArray=JSON.parse(localStorage.getItem('ARRAY'))

	let responseQuantity=JSON.parse(sessionStorage.getItem('productQuantity'))

	let newArray=[]


	for (const [key,value] of Object.entries(responseQuantity)){

		responseArray.forEach(obj=>{

			if(obj.productId==key.split('product')[1]){
				obj.qnty=value.qnty
				newArray.push(obj)
			}
		})
		
	}

	localStorage.setItem('storage',JSON.stringify(newArray))	
}


function showTotal(){

	if(parseFloat(sessionStorage.getItem('TOTAL_PRICE'))){

		$('#TOTAL_PRICE').html(parseFloat(sessionStorage.getItem('TOTAL_PRICE')))

	}else{
		$('#TOTAL_PRICE').html(0)

	}

}

showTotal()



