let wholeSellers=$('#whs')
let outlets=$('#outlets')
let outletArray=null
var current_outlet=""
var current_whs

var TOTAL_PRICE = sessionStorage.getItem('TOTAL_PRICE')?parseInt(sessionStorage.getItem('TOTAL_PRICE')):0


$(document).ready(()=>{

	var firstId=""

	$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/whs/v2',(response,status)=>{


		let Wholesellers=response.organizations

		firstId=response.organizations[0].orgId


		Wholesellers.forEach(wholeseller=>{

			let whsId=wholeseller.orgId
			let orgName=wholeseller.orgName;

			wholeSellers.append(`<option value="${whsId}">${orgName}</option>`)

		})

		addOutlets(firstId)

		let data=sessionStorage.getItem('productQuantity')

		if(data==="" || data===null){

			sessionStorage.setItem('productQuantity',"{}")

			sessionStorage.setItem('TOTAL_PRICE',0)

		}

		sessionStorage.setItem('outletArray',"{}")

		$('.total-price span').html(sessionStorage.getItem('TOTAL_PRICE'))

		productQuantityArray=JSON.parse(sessionStorage.getItem('productQuantity'))

		getProductsAndCategoriesByWholeSellerId(firstId)


		current_whs=$('select#whs').children("option:selected").val();

		sessionStorage.setItem("ouletId",current_outlet)
		sessionStorage.setItem("whsId",current_whs)


		if(firstId){

			 $('.container ol').empty()

			 $('.container ol').append(`<li><div id="p0" onclick=getProductsByWholeSellerId(${firstId}) class="tooltip"><img src="../Images/App/basket.png" class="img"/><div class="category-name">All</div></div></li>`)

		}

	})


})



function addOutlets(whsId){

	if(whsId!==null){

		outlets.empty()

		$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/outlets/v2',(response,status)=>{

		let organization=response.organizations;

		current_outlet=response.organizations[0].orgId

		sessionStorage.setItem('ouletId',current_outlet)

		organization.forEach(organization=>{

			let whs=organization.whs[0].whsOrgId

			
			let whsName=organization.orgName

			if(whs==whsId){

				outlets.append(`<option id="${organization.orgId}">${whsName}</option>`)
			
				}
			})

		})

	}
}




function getProductsAndCategoriesByWholeSellerId(id){

   $.get(`https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId=${id}`,(response,status)=>{

	   	Getter(response)

		let categories=response.categories;

		 categories.sort((a,b)=>{
			 	return b.productCategoryId-a.productCategoryId
			 })

		categories.forEach(category=>{


			for(const [key,value] of Object.entries(category)){

				if(key==="productCategoryId" && value>=0){

					$('#categories').append(`<h5>${key}:${value}</h5>&nbsp<span>${category.categoryName}</span><hr>`)
				}
				
				if(key==="imgUrl" && category.productCategoryId>=0){

					$('.container ol').append(`<li><div id="p${category.productCategoryId}" onclick=handleCategory(this.id,${id}) class="tooltip"><img  class="img" src="https://res.cloudinary.com/nfrnds/image/upload/fmcgdd${value}" /><span class="tooltiptext">${category.categoryName}</span><div class="category-name">${category.categoryName}</div></div></li>`)
				}		
			}
		}) 
	})
}


function Shortner(){
	productQuantityArray={}
	TOTAL_PRICE=0

	sessionStorage.setItem('TOTAL_PRICE',0)
	sessionStorage.setItem('productQuantity',"{}")	
	// sessionStorage.setItem('outletArray',"{}")
}


function Shortner2(){

	$('.cart-items b').html(Object.keys(productQuantityArray).length)
	$('.total-price span').html(TOTAL_PRICE)
	$('.cart-option').hide()

}


$("select#outlets").change(function(){

	current_outlet=$(this).children("option:selected").attr('id');

	sessionStorage.setItem('ouletId',current_outlet)

	let id=$('#whs option:selected').val()

	$('#p10').empty();

    $('.container-p ul').empty()

	getProductsAndCategoriesByWholeSellerId(id)

	Shortner()

	Shortner2()

})


$("select#whs").change(function(){

    var wholeSellers = $(this).children("option:selected").val();

    current_whs=wholeSellers

    sessionStorage.setItem('whsId',current_whs)



    $('#p10').empty();

    $('.container-p ul').empty()

    Shortner()

	Shortner2()

    $('.container ol').append(`<li><div id="p0" onclick=getProductsByWholeSellerId(${wholeSellers}) class="tooltip"><img src="../Images/App/basket.png" class="img"/><div class="category-name">All</div></div></li>`)

    getProductsAndCategoriesByWholeSellerId(wholeSellers)

	addOutlets(wholeSellers)

});





function Getter(response){

	 let productArray=response.products
	 // localStorage.setItem("ARRAY",JSON.stringify(productArray))
	 let categoryArray=response.categories;

	 let ARRAY=[]

	 productArray.forEach(product=>{

	 	let brandName=product.brandName;
	 	let productName=product.productName;
	 	let categoryid=product.categoryId;
	 	
	 	let categoryName=getCategoryById(categoryArray,categoryid)
	 	let productId=product.productId;
	 	let quantity;
	 	if(productQuantityArray[`product`+`${productId}`]){
	 		quantity=productQuantityArray[`product`+`${productId}`]
		 }
	 
	 	let qnty=0
	 	let price=product.priceList[0].list_price
	 	let image

	 	if(product.smallImgUrl!==null){

		 	image=`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl;

		 }else{

		 	image='../Images/App/dummy.png'
		 }

	 	let object={
	 		productId:productId,
	 		productName:productName,
	 		categoryName:categoryName,
	 		categoryId:categoryid,
	 		productImg:image,
	 		quantity:quantity,
	 		price:price
	 	}

	 	ARRAY.push(object)

	 	if(product.smallImgUrl!==null && product.smallImgUrl!=="" ){

	 		if(quantity){

		 		qnty=productQuantityArray[`product`+`${productId}`].qnty

		 	}

	 		let productTag=

	 		`<div class="product-container">
				<div class="product-card">

					<div class="product-image"><img id="image${productId}" src="${image}"></div>
					<div id="data" class="hide" categoryid="${categoryid}" categoryName="${categoryName}"></div>

					<div class="content">
						<div class="name"><h3 id="name${productId}">${productName}</h3></div>
						<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. </div>
						<div class="price" >Price: <b id="price${productId}">${price}</b>$</div>

						<div class="quatity">
							<div id="product${productId}" onclick="removeQuantity(this)" class="plus">-</div>
							<div id="product${productId}p" class="value">${qnty}</div>
							<div id="product${productId}" onclick="addQuantity(this)" class="minus">+</div>
						</div>
					</div>
				
				</div>
			</div>`
		 	$('.alpha .container-p ul').append(productTag)
		}
	})

	 localStorage.setItem('ARRAY',JSON.stringify(ARRAY))

}


 function getCategoryById(response,id){

	 	let data=response.filter(

	 		category=>category.productCategoryId===id

	 	)

	 	 return data[0].categoryName
	 }



function getProductResponse(id){

	let arrayResponse=[]

	$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId='+`${id}`,(response,status)=>{

		let productArray=response.products
		let categoryArray=response.categories;

		productArray.sort((a,b)=>b.price-a.price)

		productArray.forEach(product=>{

			let brandName=product.brandName;
		 	let productName=product.productName;
		 	let categoryid=product.categoryId;
		 	let categoryName=getCategoryById(categoryArray,categoryid)
		 	let productId=product.productId
		 	let quantity=1
		 	let price=product.priceList[0].list_price
		 	let image

		 	if(product.smallImgUrl!==null){

			 	image=`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl;

			 }else{

			 	image='../Images/App/dummy.png'
			 }

		 	 function getCategoryById(response,id){

				 	 let data=response.filter(

				 		category=>category.productCategoryId===id
				 	)

				 	 return data[0].categoryName
				}

		 	let object={
		 		brandName:product.brandName,
				productName:product.productName,
				categoryid:product.categoryId,
				categoryName:getCategoryById(categoryArray,categoryid),
				productId:product.productId,
				quantity:1,
				price:product.priceList[0].list_price,
				image:image

		 	}

		 	arrayResponse.push(object)

		})

	})

	return arrayResponse;

}

