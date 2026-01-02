//Logical "AND"
console.log("---Logical 'AND' operator---")
console.log(true && true) //all values have to be TRUE for expression to be TRUE
console.log(true && false) //all values have to be TRUE for expression to be TRUE

//Logical "OR"
console.log("---Logical 'OR' operator---" )
console.log(true || true) //any value should be TRUE for rhe expression to be TRUE

//Real example
console.log("---Real example1---")
var ageIsMoreThanEighteen1 = false
var isUSCitizen1 = true

var eligibilityForDrivingLicense1 = ageIsMoreThanEighteen1 && isUSCitizen1
console.log('This customer is eligible for Driving License: ' + eligibilityForDrivingLicense1)

console.log("---Real example2---")
var ageIsMoreThanEighteen2 = false
var isUSCitizen2 = true

var eligibilityForDrivingLicense2 = ageIsMoreThanEighteen2 || isUSCitizen2
console.log('This customer is eligible for Driving License: ' + eligibilityForDrivingLicense2)

//Logical "NOT"
console.log("---Logical NOT operator")
console.log(6 !== 10)