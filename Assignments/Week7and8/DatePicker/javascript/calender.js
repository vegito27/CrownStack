
let lastActiveGrid;
let currentActiveGrid=currentDate;

function AddEventListener(){


	let allgrid=document.querySelectorAll('.grid-item-days')

	allgrid.forEach((grids,index)=>{

		if(index+1==currentDate){

			// 0 for 1 date && 1 for 2nd date

			currentActiveGrid=index

			console.log("currentGrid",currentActiveGrid)

			lastActiveGrid=currentActiveGrid

			grids.addEventListener('click',(e)=>{

				let allgrid=document.querySelectorAll('.grid-item-days')

				if(lastActiveGrid){

					allgrid[lastActiveGrid].classList.remove('active-red')

					currentActiveGrid=parseInt(grids.getAttribute('index'))-1

					lastActiveGrid=currentActiveGrid

					currentDate=parseInt(grids.getAttribute('index'))

					grids.classList.add('active-red')

					obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}

					setCurretDate(obj)
					updateDate(obj,TIME)

				}
		})

		}else{


			grids.addEventListener('click',(e)=>{

				let allgrid=document.querySelectorAll('.grid-item-days')

				// console.log('last-grid',lastActiveGrid)

				allgrid[lastActiveGrid].classList.remove('active-red')

				grids.classList.add('active-red')

				currentDate=parseInt(grids.getAttribute('index'))

				currentActiveGrid=parseInt(grids.getAttribute('index'))-1

				lastActiveGrid=currentActiveGrid

				obj={"year":currentYear,"month":MONTHS[currentMonth],"monthIDX":currentMonth,"date":currentDate,"day":days[getSelectedDay(currentDate-1)]}


				setCurretDate(obj)
				updateDate(obj,TIME)

			})
		}


	})	
}


GET('.clock-image').addEventListener('click',()=>{

	GET('.accordian').classList.toggle('display')
})









