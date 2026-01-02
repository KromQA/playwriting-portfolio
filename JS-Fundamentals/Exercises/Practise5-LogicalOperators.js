// Logical AND (&&) Exercises
console.log("---Logical AND (&&) Exercises---")
// 1.Check if a number is positive AND even.
    var isNumberPositive = false
    var isNumberEven = true

    var validateNumber = isNumberPositive && isNumberEven
    console.log(validateNumber)

// 2.Check if a user is loggedIn AND hasAdminRole.
    var isLoggedIn = true
    var hasAdminRole = true

    var validateUser = isLoggedIn && hasAdminRole
    console.log(validateUser)

// 3.Check if a person is over 18 AND hasDriverLicense.
    var isOverEighteen = true
    var hasDriverLicense = false

    var validatePerson = isOverEighteen && hasDriverLicense
    console.log(validatePerson)

// 4.Check if a product is inStock AND onSale.
    var inStock = false
    var onSale = false

    var validateProduct = inStock && onSale
    console.log(validateProduct)

// 5.Check if a form field is not empty AND contains “@”.
    var isEmpty = true
    var containsAt = true

    var validateForm = isEmpty && containsAt
    console.log(validateForm)