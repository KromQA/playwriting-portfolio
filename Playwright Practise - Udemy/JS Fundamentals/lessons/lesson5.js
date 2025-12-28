// //logical "AND" operator
// console.log(true && true)  // all values have to be TRUE for expression to be TRUE
console.log("Logical 'AND' operator")
var ageIsMoreThanEighteen1a = true
var isUSCitisen1a = true
var eligibilityForDriversLicense1a = ageIsMoreThanEighteen1a && isUSCitisen1a
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense1a)

var ageIsMoreThanEighteen2a = false
var isUSCitisen2a = true
var eligibilityForDriversLicense2a = ageIsMoreThanEighteen2a && isUSCitisen2a
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense2a)

var ageIsMoreThanEighteen3a = true
var isUSCitisen3a = false
var eligibilityForDriversLicense3a = ageIsMoreThanEighteen3a && isUSCitisen3a
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense3a)

var ageIsMoreThanEighteen4a = false
var isUSCitisen4a = false
var eligibilityForDriversLicense4a = ageIsMoreThanEighteen4a && isUSCitisen4a
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense4a)

// //logical "OR" operator
// console.log(true || false) // any value should be TRUE for the expression to be TRUE
// console.log(false || false) // any value should be TRUE for the expression to be TRUE
// console.log(false || true) // any value should be TRUE for the expression to be TRUE
console.log("Logical 'OR' operator")
var ageIsMoreThanEighteen1b = true
var isUSCitisen1b = true
var eligibilityForDriversLicense1b = ageIsMoreThanEighteen1b || isUSCitisen1b
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense1b)

var ageIsMoreThanEighteen2b = false
var isUSCitisen2b = true
var eligibilityForDriversLicense2b = ageIsMoreThanEighteen2b || isUSCitisen2b
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense2b)

var ageIsMoreThanEighteen3b = true
var isUSCitisen3b = false
var eligibilityForDriversLicense3b = ageIsMoreThanEighteen3b || isUSCitisen3b
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense3b)

var ageIsMoreThanEighteen4b = false
var isUSCitisen4b = false
var eligibilityForDriversLicense4b = ageIsMoreThanEighteen4b || isUSCitisen4b
console.log('This customer is eligible for Driving License: ' + eligibilityForDriversLicense4b)

//Logical "NOT" operator
console.log("Logical NOT' operator")
console.log(!true)
console.log(6 == 10) // it is false as 6 is not equal to 10
console.log(6 !== 10) // true/confirmation is NOT equal to 10

