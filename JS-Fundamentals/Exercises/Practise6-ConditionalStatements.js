// Conditional Statement Practice Tasks
    console.log('---Conditional Statement Practice Tasks---')
// 1. Check Age for Voting
    // If age >= 18, print "You can vote".
    // Else, print "You are too young to vote".

    var age = 15
    if (age >= 18){
        console.log('Task1: You can vote')
    } else {
        console.log('Task1: You are too young to vote')
    }

// 2.Check Number Sign
    // If a number is positive, print "Positive".
    // Else, print "Negative or zero".

    var number = -2
    if (number >= 0){
        console.log('Task2: Positive')
    } else {
        console.log('Task2: Negative or zero')
    }

// 3,Check Even or Odd Number
    // If the number is divisible by 2, print "Even".
    // Else, print "Odd".

    var divisibleNumber = 0
    if (divisibleNumber % 2) {
        console.log('Task3: Even')
    } else {
        console.log('Task3: Odd')
    }


// 4.Check User Login
    // If isLoggedIn is true, print "Welcome back!".
    // Else, print "Please log in".

    var isLoggedIn = false
    if (isLoggedIn){
        console.log('Task4: Welcome back!')
    } else {
        console.log('Task4: Please log in')
    }

// 5.Check Temperature
    // If temperature > 30, print "It's hot".
    // Else, print "It's not hot".

    var temperature = 53
    if (temperature > 30) {
        console.log("Task5: It's hot")
    } else {
        console.log("Task5: It's NOT hot")
    }

// 6.Check Password
    // If password === "secret123", print "Access granted".
    // Else, print "Access denied".

    var password = 'secret123'
    if (password === "secret123") {
        console.log("Task6: Access granted")
    } else {
        console.log("Task6: Access denied")
    }

// 7.Check Array Length
    // If an array has more than or uqual 3 items, print "Array is big".
    // Else, print "Array is small".

    var cars= ['Volvo', 'Mercedes', 'Scania', 'Kia']
    if(cars.length >= 3) {
        console.log('Task7: Array is big')
    } else {
        console.log('Task7: Array is small');
    }

// 8.Check Object Property
    // If user.isAdmin is true, print "Admin access".
    // Else, print "Standard user access".
    var user = {
        name: "John",
        surname: "Smith",
        jobTitle: "Developer",
        isAdmin: false,
    };
    if (user.isAdmin === true) {
        console.log('Task8: Admin access')
    } else {
        console.log('Task8: Standard user access')
    }

// 9.Check Exam Score
    // If score >= 50, print "Passed".
    // Else, print "Failed".

    var score = 49
    if (score >= 50) {
        console.log('Task9: Passed')
    } else {
        console.log('Task9: Failed')
    }

// 10.Check Discount Eligibility
    // If age < 12 || age > 60, print "Eligible for discount".
    // Else, print "Not eligible for discount".
    var age1 = 9
    var age2 = 55
    if (age1 < 12 || age1 > 60) {
        console.log('Task10a: Eligible for discount')
    } else {
        console.log('Task10a: Not eligible for discount')
    };
    if (age2 < 12 || age2 > 60){
                console.log('Task10b: Eligible for discount')
    } else {
        console.log('Task10b: Not eligible for discount')
    };
    