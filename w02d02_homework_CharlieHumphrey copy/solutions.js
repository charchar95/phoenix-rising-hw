// Easy Does It
const quotes = ["the mountains are calling and I must go", "Nature does not hurry, yet everything is accomplished.","Congratulations! Today is your day"];

// Random
const randomThings = [1, 10, "Hello", true]
// How do you access the first element in the array?
randomThings[0]
// Change the value of "Hello" to "World"
randomThings[2] = "World"
console.log(randomThings);

//We've Got Class
const ourClass = ["Outrun", "Zoom", "Github", "Slack"]
//What would you write to access the 3rd element of the array?
ourClass[2]
//Change the value of "Github" to "Octocat"
ourClass[2] = "Octocat"
//Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City")
console.log(ourClass)


//Mix it Up
const myArray = [5 ,10 ,500, 20]
//using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon");
console.log(myArray);
//using a method, remove the string from the end of the array.
myArray.pop();
console.log(myArray);
//using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley")
console.log(myArray);
//using a different method, remove the string from the beginning of the array
myArray.shift();
console.log(myArray);
//use the reverse method on this array
myArray.reverse();
console.log(myArray);

//Biggie Smalls
for (i = 0; i <=4; i++)
if (myArray[i] < 100) {
    console.log("little number")
} else {
    console.log("big number")
}

//Monkey in the Middle
for (i = 0; i <=myArray.length; i++)
if (myArray[i] < 5) {
    console.log("little number")
} else if (myArray[i] > 10) {
    console.log("big number")
} else {
    console.log("monkey")
}

// What's in Your Closet
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
//Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe
kristynsCloset[0] = "kristynShoe"
//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(-1, 0, "raybans");
console.log(kristynsCloset);
//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset)
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0] + " " + thomsCloset[1][1] + " " + thomsCloset[2][2])
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] +"!")
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset) 