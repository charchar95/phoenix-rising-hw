// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const budgets = require('./models/budgets.js');


// =======================================
//              SHOW ROUTE
// ======================================= 
  app.get('/budgets', (request, response) => {
    response.send('hello adult life');
  }); 

app.get('/budgets/index', (req, res) => {
    res.render('index.ejs', {
       budgets: budgets
    });
});

app.get('/budgets/new:', (req, res) => {
    res.render('show.ejs', {
        
    });
  }); 

app.post('/budgets', (request, response) => {
    console.log('body', request.body)
    // let fruit = {}
    // fruit.name = request.body.name
    // fruit.color = request.body.color
    // fruit.readyToEat = request.body.readyToEat
    // fruits.push(fruit)
    // console.log('fruits', fruits)
    // response.send('data received')
    // res.redirect('/fruits');
})



// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Budget app listening on port: ${port}`)
  });