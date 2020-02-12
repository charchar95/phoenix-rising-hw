const express = require('express')
const app = express()
const port = 3000

app.get('/:number_of_bottles', (req, res) => {
    let num = req.params.number_of_bottles - 1
    if (req.params.number_of_bottles > 0) {
        res.send(`
        <h1>${req.params.number_of_bottles} cans of La Croix on the wall</h1>
        <a href="${num}">take one down, and pass it around!
        `)
    } else {
        res.send(`
        <h1>${req.params.number_of_bottles} cans of La Croix on the wall</h1>
        <a href='/'>Start again?
        `)  
    } 
})


app.get('/', (req, res) => {
    res.send(`
    <h1>99 cans of La Croix on the wall</h1>
    <a href="/98">Take one down, pass it around!
    `)
  
})

app.listen(port, () => {
    console.log('listening from the port', port)
})