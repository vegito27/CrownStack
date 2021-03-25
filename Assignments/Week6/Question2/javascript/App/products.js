
// Display All Products

function getProductsByWholeSellerId(id){

	if(previousId!==null){

		$(`#${previousId}`).removeClass("transform");
		// $('#p10 :first-Child').addClass('transform2')
	}

	$('.container-p ul').empty()

	$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId='+`${id}`,(response,status)=>{

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
		 	let productId=product.productId
		 	let quantity=1
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

		 	// console.log(object)

		 	if(product.smallImgUrl!==null && product.smallImgUrl!=="" ){

		 		let productTag=

		 		`<div class="product-container">
					<div class="product-card">

						<div class="product-image"><img src="${image}"></div>

						<div class="content">
							<div class="name"><h3>${productName}</h3></div>
							<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. </div>
							<div class="price">Price: <b>${price}<b> $</div>

							<div class="quatity">
								<div id="product${productId}" onclick="removeQuantity(this)" class="plus">-</div>
								<div id="product${productId}p" class="value">1</div>
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


	$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId='+`${id}`,(response,status)=>{

		 let productArray=response.products
		 let categoryArray=response.categories;

		 productArray.forEach(product=>{

		 	 function getCategoryById(response,id){


				 	 let data=response.filter(

				 		category=>category.productCategoryId===id

				 	)

				 	 return data[0].categoryName
				 }


		 	let brandName=product.brandName;
		 	let productName=product.productName;
		 	let categoryid=product.categoryId;
		 	let categoryName=getCategoryById(categoryArray,categoryid)
		 	let productId=product.productId
		 	let quantity=1
		 	let price=product.priceList[0].list_price
		 	let image=`https://res.cloudinary.com/nfrnds/image/upload/fmcgdd`+product.smallImgUrl;


		 	if(categoryId===product.categoryId){

			 	if(product.smallImgUrl!==null && product.smallImgUrl!=="" ){

			 		
		 		let productTag=

		 		`<div class="product-container">
					<div class="product-card">

						<div class="product-image"><img src="${image}"></div>

						<div class="content">
							<div class="name"><h3>${productName}</h3></div>
							<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. </div>
							<div class="price">Price: <b>${price}<b> $</div>

							<div class="quatity">
								<div id="product${productId}" onclick="removeQuantity(this)" class="plus">-</div>
								<div id="product${productId}p" class="value">1</div>
								<div id="product${productId}" onclick="addQuantity(this)" class="minus">+</div>
							</div>
						</div>
						
					</div>
				</div>`


			 	$('.alpha .container-p ul').append(productTag)


				}else{

					 let productTag=

				 		`<div class="product-container">
							<div class="product-card">

								<div class="product-image"><img src="../Images/App/dummy.png" class="blue" ></div>

								<div class="content">
									<div class="name"><h3>${productName}</h3></div>
									<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. </div>
									<div class="price">Price: <b>${price}<b> $</div>

									<div class="quatity">
										<div id="product${productId}" onclick="removeQuantity(this)" class="plus">-</div>
										<div id="product${productId}p" class="value">1</div>
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


function removeQuantity(el) {

//get value  div and change value there

	let x=parseInt($(el).siblings(".value").html()) - 1;

	let newPrice=x*$

	if(x>=0){
		$(el).siblings(".value").html(x)
	}

}


function addQuantity(el) {
//get value  div and change value there

	$(el).siblings(".value").html(parseInt($(el).siblings(".value").html()) + 1)

}


function removeAllProducts(wholeSaleId,categoryId){

	$('.alpha .container-p ul').empty()

}



