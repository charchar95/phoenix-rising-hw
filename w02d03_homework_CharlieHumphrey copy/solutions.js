// What is the difference between a parameter and an argument?
// An argument is the input and the paramet is how the argument(input) is shown in the function

// Within a function, what is the difference between return and console.log?
// Return will send the value of your function and stop the function. Console.log displayso on the console



// Palindrome //
const reverseString = (string) => {
    let lowCaps = string.toLowerCase(); // makes all letters in string lower case
    let splitString =lowCaps.split(''); // makes each letter in the string an array
    let reverseArray = splitString.reverse(''); // reverses the array
    let joinArray = reverseArray.join(''); // brings it all together in a string
    return joinArray === lowCaps // compare the new array and string
}

console.log(reverseString("tacocat"));
console.log(reverseString("Radar"));
console.log(reverseString("Borscht"));



// Sum Array //
const sumArray = (num) => {
    let sum = 0 
    for(i = 0; i <= num.length; i++) {
        sum += num[i] //loop through array and add to sum
    }
return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));



// Prime Numbers //
const checkPrime = (num) => {
 // loop until the square root
    for(i = 2; i <= Math.sqrt(num); i++) {
        // if i equals 0 it is not prime
        if (num % i === 0) {
        return false
    } 
}
//if the loops runs and never returns false, then it will jump to the next line & return true
    return true
 }
console.log(checkPrime(5));

// Prime - Part Two //
const printPrimes = (prime) => {
    //loop through all numbers until 'prime'
    for(let i = 0; i <= prime; i++) {
    //if the number is prime it will be console.logged
    if (checkPrime(i)) {
       console.log(i)
} 
    }
}
printPrimes(98);



// Rock Paper Scissors//
const randomMove = () => {
    // make an array for each option
    const moveArray = ["rock", "paper", "scissor"]
    // make a random number
    const randomNum = Math.floor(Math.random() * (moveArray.length))
    console.log(randomNum)
    // end function & return
    return moveArray[randomNum]
  }

//run a round of the game to test
let compMove = randomMove()
let usersMove = randomMove()

const rockPaperScissors = (compMove, usersMove) => {
// show moves in console log
console.log("computer move is: " + compMove)
console.log("user move is: " + usersMove)
// compare moves & check for a tie!
// Console the winner!
if (compMove === usersMove) {
    console.log("It's tie! Try again!")
}
else if(compMove === "rock") {
    if(usersMove === "paper") { console.log("User wins!") }
    else if(usersMove === "scissor") { console.log("Computer wins!") }
} else if(compMove === "paper") {
    if(usersMove === "rock") { console.log("Computer wins!") }
    else if(usersMove === "scissor") { console.log("User wins!") }
} else {
    if(usersMove === "rock") { console.log("User wins!") }
    else if(usersMove === "paper") { console.log("Computer wins!") }
}
}
rockPaperScissors(compMove, usersMove)