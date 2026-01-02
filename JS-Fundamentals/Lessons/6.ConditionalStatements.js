// Conditional statement

// if(condition) {
//     execute some code here
// } else {
//     execute some code here
// }

//If hour between 6 and 12 print "Good morning"
//If hour between 12 and 18 print " Good afternoon" 
//If Otherwise: Good evening

console.log('---Display day message---')
var hour = 17

if(hour >= 6 && hour <12){
    console.log('Good morning');
} else if (hour >= 12 && hour < 18){
    console.log('Good afternoon')
}else {
    console.log('Good evening')
}

console.log('---Driving eligibility---')

var ageIsMoreThanEighteen1 = true
var isUSCitizen1 = true

if ( ageIsMoreThanEighteen1 && isUSCitizen1) {
    console.log('Customer is eligible for Driving License')
} else {
    console.log('Customer is NOT eligible for Driving License')
}

