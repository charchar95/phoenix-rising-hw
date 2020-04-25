// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(express.static('public')); 

// =======================================
//              DATABASE   
// ======================================= 
const budgets = require('./models/budgets.js');

// =======================================
//              ROUTES
// ======================================= 
app.get('/budgets/', (req, res) => {
    res.render('index.ejs', {
       budgets: budgets
    });
});

app.get('/budgets/new', (req, res) => {
    res.render('new.ejs');
  }); 

app.get('/budgets/:id', (req, res) => {
    res.render('show.ejs', {
       budgets: budgets[req.params.id]
    });
});



app.post('/budgets', (request, response) => {
    console.log('body', request.body)
    let budget = {}
    budget.date = request.body.date
    budget.name = request.body.name
    budget.from = request.body.from
    budget.amount = request.body.amount
    bankAccount =+ budget.amount
    budget.tags = request.body.tags
    budgets.push(budget)
    console.log('budgets', budgets)
    response.redirect('/budgets/');
})




// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Budget app listening on port: ${port}`)
  });