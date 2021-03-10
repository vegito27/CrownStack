  let prev=document.querySelector('.leftArrow')
    let next=document.querySelector('.rightArrow')
    let current=0

    const wrapperX = document.querySelector('.pick');

    next.addEventListener('click',()=>{

      let displayArea = wrapperX.parentElement.clientWidth;

      
       let pixels =current+(-displayArea )

       if(pixels>-4*displayArea){

          wrapperX.style.transform = 'translateX('+ pixels + 'px)';

          current=pixels
        }


    })


    prev.addEventListener('click',()=>{

      let displayArea = wrapperX.parentElement.clientWidth;

      let pixels =current+(displayArea )

      if(pixels<=0){

        wrapperX.style.transform = 'translateX('+ pixels + 'px)';

        current=pixels

      }

    })
