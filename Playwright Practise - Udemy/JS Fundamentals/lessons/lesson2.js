//Concatination and Interpolation
var price = 150
var itemName = "Table"

var messageToPrint1= "The price for your "+itemName+" is "+price+" dollars" // concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint1)
console.log(messageToPrint2)