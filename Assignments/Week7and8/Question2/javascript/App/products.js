
// Display All Products

function getProductsByWholeSellerId(id){

	if(previousId!==null){

		$(`#${previousId}`).removeClass("transform");
	}

	$('.container-p ul').empty()

	$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId='+`${id}`,(response,status)=>{

		 let productArray=response.products
		 let categoryArray=response.categories;

		 productArray.forEach(product=>{

		 	let brandName=product.brandName;
		 	let productName=product.productName;
		 	let categoryid=product.categoryId;
		 	let categoryName=getCategoryById(categoryArray,categoryid)
		 	let productId=product.productId
		 	let quantity
		 	let qnty=0

		 	if(productQuantityArray[`product${productId}`]){

			 	quantity=productQuantityArray[`product${productId}`]

			 }
		 
		 	let price=product.priceList[0].list_price
		 	let image=`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl;

		 	let ResponseData;

		 	if(localStorage.getItem('productArray')){

		 		ResponseData=JSON.parse(localStorage.getItem('productArray'))

		 	}else{

		 		localStorage.setItem('productArray','[]')

		 	}

		 	if(product.smallImgUrl!==null && product.smallImgUrl!=="" ){

		 		if(quantity){

			 		qnty=productQuantityArray[`product`+`${productId}`].qnty

			 	}

				 let object={
			 		productName:productName,
			 		productId:productId,
			 		categoryName:categoryName,
			 		categoryId:categoryid,
			 		productImg:image,
			 		quantity:quantity,
			 		price:price
			 	}

			 	ResponseData.push(object)

			 	localStorage.setItem('productArray',JSON.stringify(ResponseData))

		 		let productTag=

			 		`<div class="product-container">
						<div class="product-card">

							<div class="product-image"><img src="${image}"></div>
							<div id="data" class="hide" categoryid="${categoryid}" categoryName="${categoryName}"></div>

							<div class="content">
								<div class="name"><h3>${productName}</h3></div>
								<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. </div>
								<div class="price" >Price: <b id="price${productId}">${price}</b> $</div>

								<div class="quatity">
									<div id="product${productId}" onclic="removeQuantity(this)" class="plus">-</div>
									<div id="product${productId}p" class="value">${qnty}</div>
									<div id="product${productId}" onclick="addQuantity(this)" class="minus">+</div>
								</div>
							</div>
					
						</div>
					</div>`

			 	$('.alpha .container-p ul').append(productTag)

			}

		 })

	})

}

 // getProductsByWholeSellerId(30972)


function displayProductByCategory(id,categoryId){

	TOTAL_PRICE=parseFloat(sessionStorage.getItem('TOTAL_PRICE'))

	productQuantityArray=JSON.parse(sessionStorage.getItem("productQuantity"))

	$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId='+`${id}`,(response,status)=>{

		 let productArray=response.products
		 let categoryArray=response.categories;

		 productArray.forEach(product=>{


		 	let brandName=product.brandName;
		 	let productName=product.productName;
		 	let categoryid=product.categoryId;
		 	let categoryName=getCategoryById(categoryArray,categoryid)
		 	let productId=product.productId
		 	let quantity;
		 	if(productQuantityArray[`product`+`${productId}`]){
		 		quantity=productQuantityArray[`product`+`${productId}`]
			 }
		 
		 	let qnty=0
		 
		 	let price=product.priceList[0].list_price
		 	let image=`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl;

		 	let ResponseData=[];

		 	if(localStorage.getItem('productArray')){

		 		ResponseData=JSON.parse(localStorage.getItem('productArray'))

		 	}else{

		 		localStorage.setItem('productArray','[]')

		 	}

		 	if(categoryId===product.categoryId){
		 		
		 		if(quantity){

				 		qnty=productQuantityArray[`product`+`${productId}`].qnty

				 	}

			 	if(product.smallImgUrl!==null && product.smallImgUrl!=="" ){

			 		

				 let object={
			 		productName:productName,
			 		productId:productId,
			 		categoryName:categoryName,
			 		categoryId:categoryid,
			 		productImg:image,
			 		quantity:quantity,
			 		price:price
			 	}

			 	ResponseData.push(object)

			 	localStorage.setItem('productArray',JSON.stringify(ResponseData))


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


				}else{

				let object={
			 		productName:productName,
			 		productId:productId,
			 		categoryName:categoryName,
			 		categoryId:categoryid,
			 		productImg:image,
			 		quantity:quantity,
			 		price:price
			 	}

			 	ResponseData.push(object)

			 	localStorage.setItem('productArray',JSON.stringify(ResponseData))
			 	
				 let productTag=

			 		`<div class="product-container">
						<div class="product-card">

							<div class="product-image"><img id="image${productId}" src="../Images/App/dummy.png" class="blue" ></div>
							<div id="data" class="hide" categoryid="${categoryid}" categoryName="${categoryName}"></div>


							<div class="content">
								<div class="name"><h3 id="name${productId}">${productName}</h3></div>
								<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. </div>
								<div class="price" >Price: <b id="price${productId}">${price}</b> $</div>

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

			}

		})
	})
}


// displayProductByCategory(30972,12)



function removeAllProducts(wholeSaleId,categoryId){

	$('.alpha .container-p ul').empty()

}














