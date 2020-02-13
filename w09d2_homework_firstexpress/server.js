const express = require('express')
const app = express();
const port = 3000


// Greetings //
app.get("/greeting/:name", (req, res) => {
    res.send(`hello ` + req.params.name + `! Welcome :)`)
})

// Tip Calculator //
app.get ('/tip/:total/:tipPercentage', (req, res) => {
    let tip = Number(req.params.total) * Number(req.params.tipPercentage) / 100
    res.send(`The tip is: ` + tip)
})

// Magic 8 Ball //
let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/magic/:question', (req, res) => {
    let random = Math.floor(Math.random() * response.length )
    let answer = response[random]
    
    res.send(`
        <html>
            <body>
                <h1>${req.params.question}</h1>
                <h2>${answer}<h2>
            </body>
        </html>
    `)
})


app.listen(port, () => {
    console.log('listening to port 3000')
});