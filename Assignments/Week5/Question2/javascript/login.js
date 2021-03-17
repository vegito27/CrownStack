if(sessionStorage.getItem('token1')){

			window.location.href="./app.html"

		}	

		let regex=/^([+]\d{2})?\d{10}$/

		 $.ajaxSetup({
			  contentType: "application/json; charset=utf-8"
			});

			 $('.userId').focus(()=>{
			 	$('.error').css('display','none')
			 })

	        $(".submit").click(function(e){
	        	e.preventDefault(); 

	        	let p=$('input[name=userId]').val()

	        	if(p==="" || p===null){
	        		$('.error').css("display","block")
	        		return false
	        	}

	        	if(!p.match(regex)){
	        		$('.error').html("Please Enter The correct userId******");
	        		$('.error').css("display","block")
	        		return false
		        }

				$.ajax({
					url: "https://netco-indo-test.nfrnds.net:20003/fmcg-dd/login",
					type: 'POST',
					data: JSON.stringify({msisdn:`${p}`}),
					error : function(err) { console.log('Error!', err) },
					success: (data)=> { 
						console.log(data)
					  	if(data.token){
					  		sessionStorage.setItem('token',true);
					  		sessionStorage.setItem('token1',data.token);
					  		window.location.href="./app.html" 
						
						}else{
							console.log("hello")
							$('.error').html("This User does not exist");
							$('.error').css("display","block")
							return false

						}



					}
				});
			}
		)