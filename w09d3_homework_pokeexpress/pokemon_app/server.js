// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const pokemon = require('./models/pokemon.js');


// =======================================
//              SHOW ROUTE
// =======================================
  app.get('/', (request, response) => {
    response.send('Welcome to the Pokemon App');
  }); 

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    });
});

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.id]
    });
  }); 





// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Pokemon app listening on port: ${port}`)
  });