//Primitives 

// Number,Boolean,string ,undefined,null are primitives

let x;
console.log(x)

//--prints undefined 

// console.log(y)

//--prints y is not define because y is not declared anywhere

const str="Hello"

console.log(str)

//--prints "Hello" and str cannot be changed 

var p=10;


console.log(typeof(p))

//--prints Number 


console.log("text".substring(1,3)) //"ex"



console.log("text".concat(" end"))

console.log("text".indexOf('x'))


//Boolean

// All these conditions does not execute because they return false value ,you have to use negate operator

if(!false)console.log("This is false")

if(!null)console.log("This is null")

if(!undefined)console.log("This is undefined")

if(!'')console.log("This is empty")

if(!0)console.log("This is 0")

if(!NaN)console.log("This is NaN")


//Variables


//let ,const var

//--var has function scope,they are declared at top of function
//let and const has block scope,if the value of the function is not initialize then its default value will be undefined



let obj = {
  message : "A message",
  doSomething : function() {
  	console.log("Pikachu")
  	return "Hello"
  }
}


//prints the name of the function

console.log(obj.doSomething)


//prints the value return by function and also the content of the function


console.log(obj.doSomething())

obj.message="This is a message changed by me"

console.log(obj)

//Assigning let object to const


const duplicate=obj

obj.message="This is a message changed by me again"

// even after assigning the object to const variable the message can be changed


console.log(duplicate)

// delete property will delete the property of message

delete obj.message

console.log(obj)


//Assign Empty object to variable


let anotherObj={}

anotherObj.message="Adding the content"

//assigning anonymous function

// arrow function

anotherObj.func=()=>{return "next"}

console.log(anotherObj.func)


console.log('--------------------')


//-- Does not understand

// You have to pass either object or null into the create function
let french=Object.create(anotherObj)

french['yes']='oui'
french['no']='non'

french['yes'];

console.log(french['message'])


//functions
// IMP- All Object properties are public

//Object.keys() can be used to iterate all the properties

// Did not Understand

function logProperty(name){
	console.log(name)
	console.log(obj[name])
}

Object.keys(obj).forEach(logProperty)


//Cloning an Object
// Object.assign() property copies one object innto another
// example
let book={title:"Good to start"}

let clone=Object.assign({},book)

console.log(clone)

// To make an object immutable use Object.freeze()

 Object.freeze()






