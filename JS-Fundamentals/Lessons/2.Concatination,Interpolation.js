
//Concatination (Joining strings together) and Interpolation (Putting variables inside strings)

//Concatenation example 1 - use quotes "" in this case
var price1= 50
var itemName1= "Cup"

var messageToPrint1 = "The price for your "+ itemName1 +" is "+ price1 +" dollars"
console.log(messageToPrint1);

//Concatenation example 2 - use quotes "" in this case
var price2= 250
var itemName2= "Table"

var messageToPrint2 = "The price for your "+ itemName2 +" is "+ price2 +" dollars"
console.log(messageToPrint2);

//Interpolation example 1 - use backticks `` in this case
var price3= 22
var itemName3= "Plate"

var messageToPrint3 = `The price for your ${itemName3} is ${price3} dollars`
console.log(messageToPrint3);

//Interpolation example 2 - use backticks `` in this case
var price4= 100
var itemName4= "Chair"

var messageToPrint4 = `The price for your ${itemName4} is ${price4} dollars`
console.log(messageToPrint4);