// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const methodOverride = require('method-override')

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


// MONGOOSE // 
mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
// =======================================
//              DATABASE   
// ======================================= 
const Products = require('./models/products.js')

// =======================================
//              ROUTES
// ======================================= 

// INDEX //
app.get('/products', (req, res) => {
    Fruit.find({}, (error, fruits)=>{
        res.render('index.ejs', {
            products: products
        });
    });
});


// NEW //
app.get('/products/new/', (req,res) => {
    res.render('new.ejs')
})


// CREATE //
app.post('/products/', (req, res)=>{
    Product.create(req.body, (error, result)=>{
        res.send(result);
    });
});



// SHOW //
app.get("/products/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
      res.render("show.ejs", {
        product: foundProduct
      });
    });
  });


// EDIT //
app.get("/products/:id/edit", function(req, res) {
    res.render(
      "edit.ejs", //render views/edit.ejs
      {
        products: products[req.params.id], 
        index: req.params.id 
      }
    );
  });

// UPDATE //
app.put("/products/:id", (req, res) => {
    // res.send(req.body)
    Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updateModel) => {
        res.send(updateModel);
      }
    );
  });


// DELETE //  
router.delete("/:id", (req, res) => {
    // res.send('deleting...')
    Product.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/products");
    });
  });

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log("Mongoose store listening")
});