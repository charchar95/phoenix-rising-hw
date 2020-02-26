// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000
const methodOverride = require('method-override')

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

// =======================================
//              DATABASE   
// ======================================= 
 const pokemon = require('./models/pokemon.js');


// =======================================
//              ROUTES
// ======================================= 

// INDEX //
app.get("/pokemon", (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    });
});


// SHOW //
app.get("/pokemon/:id", (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id],
        index: req.params.id 
    })
})


// NEW //
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
});


// EDIT //
app.get("/pokemon/:id/edit", function(req, res) {
    res.render(
      "edit.ejs", //render views/edit.ejs
      {
        pokemon: pokemon[req.params.id], 
        index: req.params.id 
      }
    );
  });


// CREATE //
app.post("/pokemon/", (req, res) => {
    let newPokemon = {}
    newPokemon.name = req.body.name
    newPokemon.type = req.body.type
    newPokemon.stats = {}
    newPokemon.stats.hp = req.body.hp
    newPokemon.stats.attack = req.body.attack
    newPokemon.stats.defense = req.body.defense
    newPokemon.stats.speed = req.body.speed
    pokemon.push(newPokemon)
    res.redirect("/pokemon")
});
    
// UPDATE //
app.put("/pokemon/:id", (req, res) => {
    let newPokemon = {}
    newPokemon.name = req.body.name
    newPokemon.type = req.body.type
    newPokemon.img = req.body.img
    newPokemon.stats = {}
    newPokemon.stats.hp = req.body.hp
    newPokemon.stats.attack = req.body.attack
    newPokemon.stats.defense = req.body.defense
    newPokemon.stats.speed = req.body.speed
    pokemon[req.params.id]= newPokemon
    res.redirect("/pokemon")
  });


// DELETE //  
  app.delete("/pokemon/:id", (req, res) => {
    // code to delete
    pokemon.splice(req.params.id, 1); //remove just one the item from the array
    res.redirect("/pokemon"); 
  });
  

// ROOT REDIRECT //
app.get("/", (req, res) => {
    res.redirect("/pokemon");
})

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log("Catch them all!!")
});