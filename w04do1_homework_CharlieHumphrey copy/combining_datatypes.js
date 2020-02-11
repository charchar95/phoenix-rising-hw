// Section Two 
// Combining Datatypes
// Combine objects, arrays, and functions


// Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. 
const crayonBox = [
    "blue",
    "green",
    "yellow",
    "red",
]
// Log one of the elements of that array.
console.log(crayonBox[3])


// Create an object bottle that has a property that is an object: cap
// Cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.
const bottle = {
    cap: {
    size: "small",
    material: "metal"
    }
}
// Log one of the properties of that inner object.
console.log(bottle.cap.material);



// Create an array called receipt that has at least one object in it.
const receipt = [
     {
        item: "orange",
        price: 5,
    },
     {
        item: "rice",
        price: 3
    },
]

// Log one of the properties of that inner object.
console.log(receipt[1].price);

// Create an array called apartmentBuilding that has an array as one of its elements, 
// the inner array should be the names of the tenants. 
const apartmentBuilding = [
    names = [
    "Jess", 
    "Revel", 
    "Charlie", 
    "Lorena", 
    ],
    type = [
        "green",
         "small", 
         "kinda ugly"
    ]
]

// Log one of the elements of the inner array.
console.log(apartmentBuilding[0][2]);



// Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following kinds of properties
// item: scarf, size : 6ft etc.
// Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
    closet = {
        item: "scarf",
        size: "6ft",
    }
    return closet.size
}
console.log(knit())


// Create a function crayonSelector that returns an object that has an array
const crayonSelector = () => {
return crayonBox[2]
}
// Log one of the elements of that array.
console.log(crayonSelector());

// Create a function powerButton that returns a function called options - 
// options should console.log a simple message like select a song. 

const powerButton = (options) => {
    console.log(options ())
}
const options = () => {
    return "select a song"
}
powerButton(options);

// Call that inner function

// Model a Vending Machine 
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack
const vendingMachine = { 
    items:
    [ {
        itemName: "chips",
        price: 2
    },
    {
        itemName: "cookie", 
        price: 1
    },
    {
    itemName:"candy",
    price: 5
    }
    ],
    vend (i) {
        console.log(vendingMachine.items[i]);
    },
}
vendingMachine.vend(2);



// Callbacks
// Make a function add that takes two arguments (numbers) and sums them together

const add = (num) => num + num
// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num) => num - num
    
// Make a function multiply that takes two arguments and multiplies them
const multiply = (num) => num * num
    
// Make a function divide that takes two arguments and divides them
const divide = (num) => num / num

// Make a function calculate that takes three arguments. 
// Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote

const calculate = (num, operates) => {
   return operates(num);
}

console.log(calculate(1, add))
console.log(calculate(2, subtract))
console.log(calculate(3, multiply))
console.log(calculate(5, divide))


// Function definition placement
// Clean up this code, so that it works and has function definitions in the correct place


const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();


// Error reading
// What is meant by the error(s) this produces?
foo();

// const foo ()=>{
//     console.log('hi');
// }
// 'foo' has already been declared
// there is already a function with this name.
// if you comment out the one that has been declared, you get: 
// Missing initializer in const declaration
// meaning the '=' after foo is missing 


