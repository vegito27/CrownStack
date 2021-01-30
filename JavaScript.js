//Primitives 

// Number,Boolean,string ,undefined,null are primitives

let x;
console.log(x)

//--prints undefined 

// console.log(y)

//--prints y is not define because y is not declared anywhere

const str = "Hello"

console.log(str)

//--prints "Hello" and str cannot be changed 

var p = 10;


console.log(typeof(p))

//--prints Number 


console.log("text".substring(1, 3)) //"ex"



console.log("text".concat(" end"))

console.log("text".indexOf('x'))


//Boolean

// All these conditions does not execute because they return false value ,you have to use negate operator

if (!false) console.log("This is false")

if (!null) console.log("This is null")

if (!undefined) console.log("This is undefined")

if (!'') console.log("This is empty")

if (!0) console.log("This is 0")

if (!NaN) console.log("This is NaN")


//Variables


//let ,const var

//--var has function scope,they are declared at top of function
//let and const has block scope,if the value of the function is not initialize then its default value will be undefined



let obj = {
    message: "A message",
    doSomething: function() {
        console.log("Pikachu")
        return "Hello"
    }
}


//prints the name of the function

console.log(obj.doSomething)


//prints the value return by function and also the content of the function


console.log(obj.doSomething())

obj.message = "This is a message changed by me"

console.log(obj)

//Assigning let object to const


const duplicate = obj

obj.message = "This is a message changed by me again"

// even after assigning the object to const variable the message can be changed


console.log(duplicate)

// delete property will delete the property of message

delete obj.message

console.log(obj)


//Assign Empty object to variable


let anotherObj = {}

anotherObj.message = "Adding the content"

//assigning anonymous function

// arrow function

anotherObj.func = () => { return "next" }

console.log(anotherObj.func)


console.log('--------------------')


//-- Does not understand

// You have to pass either object or null into the create function
let french = Object.create(anotherObj)

french['yes'] = 'oui'
french['no'] = 'non'

french['yes'];

console.log(french['message'])


//functions
// IMP- All Object properties are public

//Object.keys() can be used to iterate all the properties

// Did not Understand

function logProperty(name) {
    console.log(name)
    console.log(obj[name])
}

Object.keys(obj).forEach(logProperty)


//Cloning an Object
// Object.assign() property copies one object innto another
// example
let book = { title: "Good to start" }

let clone = Object.assign({}, book)

console.log(clone)

// To make an object immutable use Object.freeze()

Object.freeze()


//Primitives V/s Object

//Except Null and undefined are treated as objects,they have object equivalent wrappers

//exmple:Number,Boolean,String

let arr = ['A', 'B', 'C']
delete arr[1]
console.log(arr)

// JavaScript’ s arrays don’t throw“ index out of range” exceptions.If the index is not available, it will return undefined.


// Js  array is very helpful in implementing stack and queues

// Stack

let stack=[]

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack)

stack.pop();

console.log(stack)

// Queue

let queue=[]

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue)


// shift function removes first value from queue

queue.shift()

console.log(queue)


// Functions 

//functions are independent units of behaviour

//functions are object

// Functions can be assigned to a variable ,stored in objects annd array,passed as an argument functions and returned from functions



//Arrays 

var Cars=['Bmw','Jaguar','Audi']

console.log(typeof(Cars))

console.log(Cars.length)

// Sorts by character
console.log(Cars.sort())

for(let i=0;i<Cars.length;i++){
	console.log(Cars[i])
}


Cars.push('Skoda')
console.log(Cars)

Cars[10]="undefined"

console.log(Cars)


let arr1=new Array(10,11,12,13,14,15)

console.log(arr1)


 console.log(arr1 instanceof Array)

 arr1.pop();

 console.log(arr1)


// shifting is same as pop front operation in queue

arr1.shift()

console.log(arr1)

arr1.unshift(10)
console.log(arr1)

// delete is not preferred for deleting the index of array instead use shift

delete arr1[0]
console.log(arr1)


// Splice to add element in an array

let fruits=['Banana','Apple','Orange','Mango']

fruits.splice(2,0,'Grapes','Kiwi')

console.log(fruits)


// Splice to remove element from an array

fruits.splice(1,2)

console.log(fruits)

console.log(fruits.concat(arr1))

// Slice method slices out new array by not altering the original array

console.log(fruits)

// returns new array starting from index 1
// Slice method is just like a substring method in java but here it is applicable for array not for string

fruits.slice(1)


console.log(fruits.slice(1))

// toString() method converts an array into a comma separated values of string

console.log(fruits.toString())

// reverse function reverses the array 

console.log(fruits.reverse())

// Sorting array in ascending order 

console.log(queue.sort(function(a,b){ return a-b}))


// Sorting array in random order

let points=[40,100,1,5,25,10]

console.log(points.sort(function(a,b){return 0.5-Math.random() }))

//////---Async and await------


console.log()


function makeRequest(location){

	return new Promise((resolve,reject)=>{

		// step -1: prints this line

		console.log(`Making a request to ${location}`)

		if(location=="Google"){

			resolve('Google says HI !')
		
		}else{

			reject('We can only talk to Google')
		}

	})

}

function ProcessRequest(response){

	return new Promise((resolve,reject)=>{

		// step-3 

		console.log('Processing response')
		
		resolve(`Extra information + ${response} `)
	})
}


makeRequest('Google')
	.then(response=>{


		console.log('Response Received')

		// step-2: Response received

		return ProcessRequest(response)
	})

	.then(processedResponse=>{

		console.log(processedResponse)

})

// --converting into async await

async function doWork(){

	const response = await makeRequest('Google')

	console.log(response)

	const processedResponse =await ProcessRequest(response)

	console.log(processedResponse)

}

doWork()

// Modified Form

async function doWork2(){

	try{

		const response = await makeRequest('Facebook')

		console.log(response)

		const processedResponse =await ProcessRequest(response)

		console.log(processedResponse)
	}
	catch(err){

		console.log(err)


	}

}

doWork2()

function makingMyOwnPromise(){

	return new Promise((resolve,reject)=>{
		let a=10

		if(a==10){
			resolve(a)
		}
		else{
			reject('a is not 10')
		}
	})
}


makingMyOwnPromise()
.then(response=>{
	console.log(response)
})

const posts=[
	{title:"Post One",body:'This is post one'},
	{title:"Post Two",body:'This is post Two'}
]


function getPosts(){
	setTimeout(()=>{

		let output=''

		posts.forEach((post,index)=>{

			output+=`${post.title} -> ${post.body}    `

		})

		console.log(output)

	}, 1000);
}

getPosts()


function myFunc(){

	let arr=[1,2,3,4,,5,6,7];

	arr.forEach((value,index)=>{
		console.log(`${value}`)
	})
}


myFunc()























