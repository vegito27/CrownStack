function createObjectInCart(){

	let products=JSON.parse(localStorage.getItem('storage'))

	if(products){

		products.forEach(product=>{

			let productName=product.productName;
			let productId=product.productId
			let price=product.price
			let image=product.productImg
			let qnty=product.qnty
			let cartProduct=
							`
							<div class="product-card">
							<div class="wrapper">

								<div class="image-wrapper">
									<img src="${image}">
								</div>

								<div class="content-wrapper">
									<div class="same-width start-n productName">${productName}</div>
									<div class="same-width start Price">Price&nbsp:&nbsp&nbsp<b style="color:dodgerblue" id="price${productId}">${price}</b>$</div>
									<div class="same-width start quantity">
										<div id="product${productId}" onclick="removeQuantity(this)" class="plus">-</div>
										<div id="product${productId}p" class="value">${qnty}</div>
										<div id="product${productId}" onclick="addQuantity(this)" class="minus">+</div>
									</div>						
								</div>

							</div>
						</div>
						`

			$('#checkout-product-cart-container').append(cartProduct)

		}) 	}
	
	$('#TOTAL_PRICE').html(sessionStorage.getItem('TOTAL_PRICE'))
}

createObjectInCart()