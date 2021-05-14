const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000);
app.set('view engine' , 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

console.log("Listenign");

app.get('/' , (req,res) => {
    res.render('home' , {titles: 'Home'});
})

app.get('/data', (req, res) => {
    res.render('data', { titles: 'Data' });
})

app.get('/help', (req, res) => {
    res.render('help', { titles: 'Help' });
})

app.get('/about', (req, res) => {
    res.render('about', { titles: 'About' });
})

app.get('/resources', (req, res) => {
    res.render('resources', { titles: 'Resources' });
})
