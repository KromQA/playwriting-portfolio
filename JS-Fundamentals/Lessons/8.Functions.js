

// Declarative function 
    
function helloOne () {
    console.log('Hello one!')
}
helloOne()


// Anonymus function
var helloTwo = function () {
     console.log('Hello Two!')
}
helloTwo()

// ES6 function syntax or arrow function
var helloThree = () => {
     console.log('Hello Three!')
}
helloThree()

// function with arguments

function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('John', 'Smith')

// function with return
function multipleByTwo(number){
    var result = number *2 
    return result
}
var myResult = multipleByTwo(5)
console.log(myResult)





//import function
import {printAge} from './Helpers/printHelper.js'
printAge(5)


//import everything
import * as helper from './Helpers/printHelper.js'
helper.printAge(10)