let wholeSellers=$('#whs')
let outlets=$('#outlets')
let productQuantityArray=null
var TOTAL_PRICE;
var current_outlet=""


if(sessionStorage.getItem('TOTAL_PRICE')){

	TOTAL_PRICE=parseInt(sessionStorage.getItem('TOTAL_PRICE'))
}
else{
	TOTAL_PRICE=0
}


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

		$('.total-price span').html(sessionStorage.getItem('TOTAL_PRICE'))

		productQuantityArray=JSON.parse(sessionStorage.getItem('productQuantity'))

		getProductsAndCategoriesByWholeSellerId(firstId)

		if(firstId){

			 $('.container ol').empty()

			 $('.container ol').append(`<li><div id="p0" onclick=getProductsByWholeSellerId(${firstId}) class="tooltip"><img src="../Images/App/basket.png" class="img"/><div class="category-name">All</div></div></li>`)

		}
		// let p=getProductResponse(firstId);

	})


})



function addOutlets(whsId){

	if(whsId!==null){

		outlets.empty()

		$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/outlets/v2',(response,status)=>{

		let organization=response.organizations;

		current_outlet=response.organizations[0].orgName

		// console.log(response)

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



$("select#whs").change(function(){

    var wholeSellers = $(this).children("option:selected").val();

    $('#p10').empty();

    $('.container-p ul').empty()

    // getProductsByWholeSellerId(wholeSellers)

    $('.container ol').append(`<li><div id="p0" onclick=getProductsByWholeSellerId(${wholeSellers}) class="tooltip"><img src="../Images/App/basket.png" class="img"/><div class="category-name">All</div></div></li>`)


    sessionStorage.setItem("productQuantity",JSON.stringify(productQuantityArray))

    getProductsAndCategoriesByWholeSellerId(wholeSellers)


	addOutlets(wholeSellers)


});


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
		 	let image=`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl;

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
				image:`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl

		 	}

		 	arrayResponse.push(object)


		})


	})

	return arrayResponse;

}



function getProductsAndCategoriesByWholeSellerId(id){

   $.get(`https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId=${id}`,(response,status)=>{
	   	 let productArray=response.products
		 let categoryArray=response.categories;
		 let categoryName1="";


		 function getCategoryById(response,id){


		 	 let data=response.filter(

		 		category=>category.productCategoryId===id

		 	)

		 	 return data[0].categoryName
		 }


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
		 	let image=`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl;


		 	let object={
		 		productName:productName,
		 		productId:productId,
		 		quantity:1,
		 		categoryName:categoryName,
		 		categoryId:categoryid,
		 		productImg:image,
		 		price:price
		 	}

		 	if(product.smallImgUrl!==null && product.smallImgUrl!=="" ){

		 		if(quantity){

			 		qnty=productQuantityArray[`product`+`${productId}`].qnty

			 		console.log(qnty)

			 	}


		 		let productTag=

		 		`<div class="product-container">
					<div class="product-card">

						<div class="product-image"><img src="${image}"></div>

						<div class="content">
							<div class="name"><h3>${productName}</h3></div>
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

$("select#outlets").change(function(){

	current_outlet=$(this).children("option:selected").attr('id');

	console.log(current_outlet)

})

