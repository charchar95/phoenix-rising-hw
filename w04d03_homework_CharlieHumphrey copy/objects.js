// Hamster //
class Hamster {
    constructor (name) {
    this.owner = ""
    this.name = name
    this.price = 15
    }
    wheelRun () {
        console.log("squeak squeak")
    } 
    eatFood () {
        console.log("nibble nibble")
    }
    getPrice () {
        return this.price
    }
}


// Person //
class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
 }
    getName () {
        return this.name
    }
    getAge () {
    return this.age
    }
    getWeight () {
        return this.weight
    }
    greet () {
        console.log("Hi " + this.name + "!")
    }
    eat () {
        this.weight += 2
        this.mood += 5
    }
    exercise () {
        this.weight -= 2
    }
    ageUp () {
        this.age += 1
        this.height += 1
        this.weight += 1
        this.mood -= 5
        this.bankAccount += 10
    }
    buyHamster (Hamster) {
        this.hamsters.push(Hamster)
        this.mood += 10
        this.bankAccount -= Hamster.getPrice()
    }
}


// Instantiate a new Person named Timmy
timmy = new Person("Timmy")

// Age Timmy five years
for (i = 0; i <= 4; i += 1){
    timmy.ageUp(timmy)
    }


// Have him eat five times.
for (i = 0; i < 6; i += 1){
timmy.eat(timmy)
}

// Have him exercise five times
for (i = 0; i < 6; i += 1){
    timmy.exercise(timmy)
    }

// Age Timmy 9 years
for (i = 0; i <= 9; i += 1){
    timmy.ageUp(timmy)
    }

// Create a hamster named "Gus"
gus = new Hamster("Gus")

// Set Gus's owner to the string "Timmy"
gus.owner = "Timmy"

// Have Timmy "buy" Gus
timmy.buyHamster(gus)


// Age Timmy 15 years
for (i = 0; i <= 15; i += 1){
    timmy.ageUp(timmy)
    }

// Have Timmy eat twice
for (i = 0; i < 3; i += 1){
    timmy.eat(timmy)
    }
    
// Have Timmy exercise twice
for (i = 0; i < 3; i += 1){
    timmy.exercise()
    }

    console.log(timmy)