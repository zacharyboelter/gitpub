const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks');

app.get('/', (req, res) => {
    res.send('Welcome to thee Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks:drinks});
});

app.get('/drinks/:id', (req, res) => {
    // res.send(req.params.id);
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id]
    });
});


app.listen(port, () => {
    console.log('listening to port', port);
});