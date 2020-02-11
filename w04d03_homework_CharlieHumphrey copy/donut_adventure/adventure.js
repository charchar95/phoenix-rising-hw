// HERO CLASS //
class Hero {
    constructor (name) {
        this.name = name
        this.health = 100
        this.weapons = [
        {
            name: "sprinkleSpray",
            value: 5,
           
        }, 
        {
             name: "sugarShock",
             value: 10,
        }
    ]
    this.catchPhrases = [
        'I\'m fresher than day old pizza', 
        'You can\'t count my calories'
     ];
    }
    talkSass() {
        console.log(this.catchPhrases[Math.floor(Math.random()* this.catchPhrases.length)]);
    }
    announceHealth () {
        console.log(`${this.name} current health is ${this.health}`)
    }
    fight (enemy) {
        enemy.health -= this.weapons[0].value 
        console.log(`${this.name} hit ${enemy.name} with ${this.weapons[0].name}, his health is now ${enemy.health}`)
    }
}

donut = new Hero("Dougie")


// ENEMY CLASS //
class Enemy {
    constructor (name) {
        this.name = name
        this.health = 100
        this.weapons = [
            {
            name: "pepperoniStars",
            value: 5,  
        }, {
            name: "cheeseGrease",
            value: 10,  
        }
    ]
    this.catchPhrases = [
        'I\'m youtube famous',
        'I\'m more dangerous than an uncovered sewer'
        ];
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.floor(Math.random()* this.catchPhrases.length)]);
    }
    announceHealth () {
        console.log(`${this.name} current health is ${this.health}`)
    }
    fight (hero) {
        hero.health -= this.weapons[0].value 
        console.log(`${this.name} hit ${hero.name} with ${this.weapons[0].name}, his health is now ${hero.health}`)
    }
}

rat = new Enemy ("Pizza Rat")


// Walking Down the Street //
donut.talkSass();
rat.talkSmack();
donut.announceHealth();
rat.announceHealth();

// Fight! //
donut.fight(rat)
rat.fight(donut)
