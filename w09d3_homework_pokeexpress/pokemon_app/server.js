// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
// const bakedGoods = require('./models/bakedgoods.js');


// =======================================
//              SHOW ROUTE
// =======================================
  app.get('/', (request, response) => {
    response.send('Welcome to the Pokemon App');
  }); 


// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Pokemon app listening on port: ${port}`)
  });