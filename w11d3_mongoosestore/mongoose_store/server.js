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
app.use('/public', express.static('public'));

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
        res.redirect("/products");
    });
});



// SHOW //
app.get("/products/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
      res.render("show.ejs", {
        Product: foundProduct
      });
    });
  });


// EDIT //
app.get('/products/:id/edit', (req, res)=>{
  Product.findById(req.params.id, (err, foundProduct)=>{ 
      res.render(
      'edit.ejs',
      {
        Product: foundProduct 
      }
    );
  });
});


// UPDATE //
router.put("/products/:id", (req, res) => {
    // res.send(req.body)
    Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updateModel) => {
        res.redirect("/products");
      }
    );
  });


// DELETE //  
// route not working
router.delete("products/:id", (req, res) => {
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
        name: 'Acorn',
        description: 'Often found on the ground near trees. Squirrels adore this nut, so you may have competition while foraging. Add one to a meal for a nutty seasoning.',
        img: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/6/66/BotW_Acorn_Icon.png/40px-BotW_Acorn_Icon.png?version=9409da02876ad5890b9510b92802f4dd',
        price: 2,
        qty: 99
      }, {
        name: 'Armored Carp',
        description: 'Calcium deposits in the scales of this ancient fish make them as hard as armor. Cooking it into a dish will fortify your bones, temporarily increasing your defense.',
        img: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/8/86/BotW_Armored_Carp_Icon.png/40px-BotW_Armored_Carp_Icon.png?version=f9b36aaa996c7ab1a257dc701d1e1d0d',
        price: 10,
        qty: 0
      }, {
        name: 'Hydromelon',
        description: 'This resilient fruit can flourish even in the heat of the desert. The hydrating liquid inside provides a cooling effect that, when cooked, increases your heat resistance.',
        img: 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/b/b0/BotW_Hydromelon_Icon.png/40px-BotW_Hydromelon_Icon.png?version=4a1149119c374d9c9d109e2e0d4b1fb0',
        price: 7000,
        qty: 1
      }
    ],(err, data)=>{
      console.log(data);
      res.redirect('/products');
    })
})


// BUY //
// route not working //
router.put("products/:id/buy", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    Product.findByIdAndUpdate(req.params.id, product, (err, updatedModel) => {
      Product.qty -= 1;
      res.redirect(`/products/${req.params.id}`);
    })
    })
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log("Mongoose store listening")
});

