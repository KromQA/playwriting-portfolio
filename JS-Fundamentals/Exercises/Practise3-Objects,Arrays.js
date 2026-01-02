
//Objects tasks
// 1.Create an object person with 3 properties.
var person = {
    age: "15",
    height: "180",
    occupation: "Scaffolder"
}
// 2.Add a new property to person.
person.smoker ="No"; 
// 3.Delete a property from person.
delete person.height;
// 4.Add a method to person that prints something.
console.log(person.age)
// 5.Create a nested object and log a nested property.
var person = {
    age: "15",
    height: "180",
    occupation: "Scaffolder",
    address: {
        street: "Sotherby Drive",
        city: "London",
        postCode: "13245",
    }
};

// Arrays tasks
// 1. Create an array of 5 strings representing your favorite fruits.
var favFruits= ["Orange","Apple","Banana","Pear","Plum"]
// 2. Add a new fruit to the end of the array.
favFruits.push("Blueberry")
// 3. Remove the first fruit from the array.
favFruits.shift()
// 4. Access and print the third item in the array.
console.log(favFruits[2])
// 5. Create an array of 3 objects, each with 2 properties, and print one property from the second object.
var favItems= [
{names: ["Steven","Peter","Charles","Eve"]},
{animals: ["Dogs","Cats","Birds"]},
{cars:["small","medium","heavy"]},
];
console.log(favItems[1].animals[2])