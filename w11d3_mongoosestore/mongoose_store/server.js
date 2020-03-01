// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const router = express.Router()

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
const Product = require('./models/products.js')

// =======================================
//              ROUTES
// ======================================= 

// INDEX //
app.get('/products', (req, res) => {
    Product.find({}, (error, Product)=>{
        res.render('index.ejs', {
            Product: Product
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

 // SEED ROUTE //
 app.get('/seed', (req, res) => {
  Product.create(
    [
      {
        name: 'Beans',
        description: 'A small pile of beans. Buy more beans for a big pile of beans.',
        img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
        price: 5,
        qty: 99
      }, {
        name: 'Bones',
        description: 'It\'s just a bag of bones.',
        img: 'http://bluelips.com/prod_images_large/bones1.jpg',
        price: 25,
        qty: 0
      }, {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        qty: 1
      }
    ],(err, data)=>{
      console.log(data);
      res.redirect('/products');
    })
})

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log("Mongoose store listening")
});

