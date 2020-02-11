
// Section One
// Programming Fundamentals

// Common programming principles

// DRY
// Don't repeat yourself, use your tools
// (functions, loops, classes, variable, etc) to keep your code simple

// KISS
// Keep it simple stupid! 

// Avoid creating a YAGNI
// Easy peasy - don't add functionality pieces until you need them

// Do the simplest thing that could possibly work
// Keeping your code clean and simple, but functional 

// Don't make me think
// Code shouldn't be hard to read or understand

// Write code for the maintainer
// Think about how others will have to maintain what you have written

// Single responsibility principle
// Each thing has one purpose and no more

// Avoid premature optimization
// Make your code functional first, then go back and optimize

// Separation of concerns
// Group like with like, keeping similar concerns together


// Which ones surprise you?
// None of them really jump out, they feel intutivate that we should be following these rules. 

// Which one is currently giving you the most struggle
// I certainly need more practice in all of them, but currently writing the code for the maintainer


// Commenting Code
// function f, l is the argument
const f = l => {
    // declaring variables 
    let es = 0, p = 0, c = 1, n = 0
    // setting up a conditional loop while c is less than l ->
    while (c <= l) {
        // var n equals var c (1) plus p 
      n = c + p;
      // c and p in an array equals n and c in an array
      [c, p] = [n, c]
      // es added to c if current is an even number
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  // call the function
  console.log(f(55))

//   Answer with comments:
// What would have been a more semantic name for this function?
// 

// Which code would you rather work with?
// The second one!

// Remove the semicolon
// The code no longer works, it is necessary


