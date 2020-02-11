
const toolKit = [{
    name: "Your Teeth", 
    price: 0,
    payPerDay: 1,
},
{
    name: "Broken Scissors", 
    price: 5,
    payPerDay: 5,
},
{
    name: "Old Gross Lawnmower",
    price: 25,
    payPerDay: 50,
},
{
    name: "Better Lawnmower",
    price: 250,
    payPerDay: 100,
},
{
    name: "Student Workers",
    price: 500,
    payPerDay: 250,
}
]

const player1 = {
    wallet: 0,
    currentTool: toolKit.shift()
}
let user

 const workDay = () => {
    alert("Welcome to Landscape For Your Life! In this game you will battle the elements and mow lawns or suffer the consequences.")
   alert("Play to earn money and win the game when you earn $1000. Good luck!")
    user = prompt("What is your name?", "Player One"); 
    showStatus ();
}

const showStatus = () => {
    alert(user + " has $" + player1.wallet + " and your current tool is " + player1.currentTool.name);
    mowLawn();
}
const mowLawn = () => {
    alert("Let's cut some grass!!!");
player1.wallet += player1.currentTool.payPerDay
checkWin();
 }

const checkTool = () => {
    if (player1.wallet <= toolKit[0].price) {
    alert("Sorry! You need to work more to buy a new tool")
   showStatus();
} else (player1.wallet >= toolKit[0].price); {
    option = prompt("You can buy a new tool! Would you like to purchase " + toolKit[0].name + "?")
        if (option.toLowerCase() === "yes") {
    player1.wallet -= toolKit[0].price
    player1.currentTool = toolKit.shift()
    showStatus(); } else {
        mowLawn();
    }
}
}

const checkWin = () => {
    if (player1.wallet >= 1000) {
        alert("YOU WON THE GAME!! Great job! Be sure to pay those students!")
    } else if (toolKit.length > 0) {
    checkTool();
    } else 
    alert("Almost done! You have: $" + player1.wallet)
    mowLawn();
}

button.onclick = workDay();


