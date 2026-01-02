// Objects and Arrays

//Objects

var customer = {
    firstName: "John",
    lastName: "Doe",
    cars: ["Volvo","Toyota","Mercedes"]
}
// Dot notation
customer.firstName = "Michael"; // Change the firstName property
customer['lastName'] = "Smith"; // Change the lastName property
console.log(customer); // Print out everything in the object
console.log(customer.firstName); // Print out the firstName of the object
// Bracket notation
console.log(customer["lastName"]); // Print out the lastName of the object
console.log(`${customer.firstName} ${customer.lastName}`); // Print out the full name

// Arrays
// a list of items

//Indexation   0       1        2           - always starts from 0 (zero)
var cars = ["Volvo","Toyota","Mercedes"]
cars[1] = "BMW"
console.log(cars[1])
console.log(customer.cars[1])