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
    res.send(pokemon)
})


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Pokemon app listening on port: ${port}`)
  });