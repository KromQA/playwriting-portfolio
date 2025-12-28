//objects
    //is defined by curly brackets. Inside we define the variables(var) and are seperated by coloms
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer.firstName)
console.log(customer['lastName'])

//Dot notation
customer.firstName = 'Mike'
//Bracket notation
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
//index       0        1         2 
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[1])

console.log(customer.cars[1])
