


function getCategories(id){


	$.get(`https://netco-indo-test.nfrnds.net:20003/fmcg-dd/catalog?whsId=${id}`,(response,status)=>{

		let categories=response.categories;

		// console.log(response)

		// console.log("categories",categories)

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



var previousId;

	function handleCategory(productId,whsId){

		console.log(whsId,productId)


		let num=parseInt(productId.split('p')[1])


		removeAllProducts(whsId,num)



		displayProductByCategory(whsId,num)


		$(document).on('click', `#${productId}`, function() {


			$(`#${productId}`).addClass("transform");

			if(previousId!==productId){

				$(`#${previousId}`).removeClass("transform");
			}

			previousId=productId
	     
		});

	}