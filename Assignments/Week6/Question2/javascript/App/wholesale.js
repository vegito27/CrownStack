let wholeSellers=$('#whs')
let outlets=$('#outlets')


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

		getCategories(firstId)

		getProductsByWholeSellerId(firstId)


		if(firstId){

			 $('.container ol').empty()

			 $('.container ol').append(`<li><div id="p0" onclick=getProductsByWholeSellerId(${firstId}) class="tooltip"><img src="../Images/App/basket.png" class="img"/><a>All</a></div></li>`)

		}
		// let p=getProductResponse(firstId);


	})


})



function addOutlets(whsId){


	if(whsId!==null){

		outlets.empty()

		$.get('https://netco-indo-test.nfrnds.net:20003/fmcg-dd/outlets/v2',(response,status)=>{

		let organization=response.organizations;

		// console.log(response)

		organization.forEach(organization=>{

			let whs=organization.whs[0].whsOrgId
			let whsName=organization.orgName

			if(whs==whsId){

				outlets.append(`<option >${whsName}</option>`)
			
				}
			})

		})

	}
}



$("select#whs").change(function(){

    var wholeSellers = $(this).children("option:selected").val();

    $('#p10').empty();

    $('.container-p ul').empty()

    getProductsByWholeSellerId(wholeSellers)

    $('.container ol').append(`<li><div id="p0" onclick=getProductsByWholeSellerId(${wholeSellers}) class="tooltip"><img src="../Images/App/basket.png" class="img"/><a>All</a></div></li>`)

    // displayAll(wholeSellers)

    let productData=getProductResponse(wholeSellers)

     // console.log(productData)

    productData.sort((a,b)=>{
    	return parseInt(a.price)-parseInt(b.price)
    })

    console.log(productData)


    getCategories(wholeSellers)

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








