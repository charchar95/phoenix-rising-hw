
// Alien Ship //
class AlienShip {
        constructor (hull, firepower, accuracy) {
        this.hull = Math.floor(Math.random() * 6 + 3);
        this.firepower = Math.floor(Math.random() * 4 + 2);
        this.accuracy = (Math.floor(Math.random()* 3 + 6) * .1);
        }
        saySpec () {
            console.log("Alien ship approaching! It has a hull of " + this.hull + " with a firepower of " + this.firepower + " and accuracy of " + this.accuracy)
        }
        attack () {
            if (Math.random() < this.accuracy) {
           ussRipley.hull -= this.firepower
            console.log('%cAliens hit ussRipley ' + this.firepower + 'damage to your hull', 'background: black; font-size: 12px; color: teal; border: black, 1px, solid');
            console.log('%c ussRipley hull status: ' + ussRipley.hull, 'color: lightyellow; font-size: 12px')
        } else {
            console.log("ussRipley avoided the attack! Nice moves!!")
        } 
    } 
}; 


// Player Ship //
let ussRipley = { 
    hull: 20, 
    firepower: 5,
    accuracy: .7,
    attack (enemy) {
        if (Math.random() < ussRipley.accuracy ) {
            enemy.hull -= ussRipley.firepower
        console.log('%c ussRipley hit the aliens ' + ussRipley.firepower + ' damage to their hull', 'background: black; font-size: 12px; color: teal; border: black, 1px, solid')
        console.log('%c Those turds are still fighting! Alien ship hull status ' + enemy.hull, 'background: black; font-size: 12px; color: teal; border: black, 1px, solid')
    } else {
        console.log('%c The enemy ship avoided the attack!', 'font-size: 15px; border: black, 1px, solid; color: darkblue; background: lightgrey')
    } 
    },
};

let gameState = {
    playerIsAlive: () => {
      // return true if player is alive
      return ussRipley.hull  >= 0
      },
    checkWin: () => {
        if (alienEnemies.length === 0) {
            alert("You win!! Nice work rookie :)")
        } else if (ussRipley.hull  <= 0) {
          alert("ussRipley is damaged beyond repair. YOU LOSE!!") 
    }
  }
}; 

///////////////////////////
  /// START THE GAME ///
///////////////////////////
console.log('%c * * * * * * * SPACEBATTLE * * * * * * * ', 'font-style: italic; font-size: 20px; color: yellow; font-weight: 700;')
console.log('%c Generating alien fighter ships', 'font-style: italic; font-size: 20px')

// make empty array 
const alienEnemies = []

for (i = 0; i <=5 ; i += 1) {
    alienEnemies.push(new AlienShip)
}

// checks if player hull is greater than 1 AND if array still has aliens left to fight
while (gameState.playerIsAlive() && alienEnemies.length >= 1) {
    let fightOneAlien = alienEnemies[0];
    fightOneAlien.saySpec();
    ussRipley.attack(fightOneAlien);

     // Check if enemy ship is destroyed:
  if (fightOneAlien.hull <= 0) {
    // If enemy ship is destroyed:
    console.log('%c Alien ship destroyed! Don\'t get cocky kid.', 'color: black; font-size: 17px; background: lightgrey; border: 1px, black, solid');
    alienEnemies.shift(); 
    // Ask user if they want to continue attacking or retreat:
    let response = prompt(`Alien ship Destroyed. ${alienEnemies.length} ships remaining. Attack or retreat?`);
    if (response === "retreat") {
      // User retreats, end game loop:
      alert("You retreated, game over");
      // ends the loop
      break;
    } else if (response === "attack") {
      // Keep looping, gameplay continues
      console.log('%c Good choice! Keep fighting!', 'color:red; font-size:15px');
      ussRipley.attack(fightOneAlien);
    }
  } else {
    // Enemy ship not destroyed, their turn to attack:
    // Enemy ship attacks:
     
    fightOneAlien.attack(ussRipley);   
  }
  gameState.checkWin();
  
}



////////////////
// Pseudocode //
////////////////

// greet the user with an alert to set up the game
// Make OBJECTS CLASS of alien ships
// OBJECT for your ship, USS Ripley
// OBJECT for the game
// FUNCTION to battle ships
// Retreat option
// END game logic
// Turn by turn logic

// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options.
// You win the game if you destroy all of the aliens.
// You lose the game if you are destroyed.

// add methods for battle here
// pass the alienship in here (and the same for the alienship)
//  attack = () => {
// accurary if hit lands
// if hit lands, how much firepower to the hull
// if hit doesnt land, next ship's turn? 
// call function to next move?




