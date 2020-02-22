// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const app = express
const port = 3000
const methodOverride = require('method-override')

// =======================================
//              MIDDLEWARE
// =======================================
// app.request(express.urlencoded({extended: false}))
// app.request(methodOverride("_method"))

// =======================================
//              DATABASE   
// ======================================= 
const pokemon = require('./models/pokemon.js')


// =======================================
//              ROUTES
// ======================================= 
app.get('/pokemon', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon
    })
})






// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log("Catch them all!!")
})