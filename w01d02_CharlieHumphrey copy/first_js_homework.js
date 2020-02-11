// Section 1
// 1. DRY stands for Don't Repeat Yourself. 
// We should pay attention to it to keep code clean and easy to read. It is more efficient. 
// Loops and postfix operaters are tools we can use to write dry codes.  
// 2. Const are variables that do not change, keeping it safe from accidental changes.
// Let is a variable that is changeable, unlike const. 
// Var is an old school way to write a variable. 

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
console.log(a<b)
console.log(c>d)
console.log('name' == 'name')
console.log(a + b == c)
console.log(a * a == d)
console.log(e != 'Kevin')
console.log(48 == '48')
console.log(f != e)
let g = 0
console.log(g)
g = b + c
console.log(g)
// I used let to be able to change the variable. Const would not allow me to do that. 
// If you do not use const, let, or var it will not be read as a variable
// 10 = g will not work. It will read it as a variable, but variables cannot have numbers. 
// The error says "Invalid left-hand side in assignment"

// Section 3
// My guess is that this is not an infinite loop. I am not sure what the condition for true is. It has not been defined. 
// The second example is an infintie loop because the variable is const and it will not change to false. 

let letters = "A";
let i = 0;
// starts a loop that will keep going until i is  greater than 20
while (i < 20) {
    // this will increase the letters by one each time the loop runs
    letters += "A";
    //this will increase i by one each time the loop runs
	i++;
}
// this will print the letter variable into the log
console.log(letters);

// After running the code I was almost 100%. I thought it was going to go ABCDE...etc. Silly mistake, but I see why that is wrong. 

// Section 4
// The first part of the control panel is: initial condition
//The first part of the control panel is: while condition
//The first part of the control panel is: repeating expression
for (i=0; i <= 999; i++) {
    console.log(i);
}

//bonus challenge: The difference is the "\" makes the ' readable for the computer. 

for (i=999; i <= 0; i--) {
    console.log(i);
}
for (i=1; i<10; i++) {
    console.log("The value of i is: " + i + " of 10");
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
console.log(StarWars)

    for (i=0; i<6; i++) {
        console.log(StarWars[i]);
    }

    for (i=0; i<6; i++) {
        console.log(StarWars[i] + " " + +i);
    }

    for (i=0; i<6; i++) {
        console.log(StarWars[++i]);
    }

// Section 5
// see bash file

