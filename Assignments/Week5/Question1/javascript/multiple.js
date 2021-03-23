

	const wrapper = document.querySelector('.cards-wrapper');

	const dots2 = document.querySelectorAll('.dot2');
		// the default active dot num which is array[0]

		// console.log(wrapper.clientWidth);

		let activeDotNum = 0;

		dots2.forEach((dot, idx) => {  
		//   number each dot according to array index
		  dot.setAttribute('data-num', idx);
		  
		//   add a click event listener to each dot
		  dot.addEventListener('click', (e) => {
		    
		    let clickedDotNum = e.target.dataset.num;
		    // console.log(clickedDotNum);
		//     if the dot clicked is already active, then do nothing
		    if(clickedDotNum == activeDotNum) {
		      // console.log('active');
		      return;
		    }
		    else {
		      // console.log('not active');
		      // shift the wrapper
		      let displayArea = wrapper.parentElement.clientWidth;
		      // let pixels = -wrapper.clientWidth * clickedDotNum;
		      let pixels = -displayArea * clickedDotNum

		      wrapper.style.transform = 'translateX('+ pixels + 'px)';
		//       remove the active class from the active dot

		      dots2[activeDotNum].classList.remove('activex');
		//       add the active class to the clicked dot

		      dots2[clickedDotNum].classList.add('activex');
		//       now set the active dot number to the clicked dot;

		      activeDotNum = clickedDotNum;
		    }
		    
		  });
		});



				