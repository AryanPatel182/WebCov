const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require( 'dotenv' ).config();
// const cors = require('cors');
const blogRoutes = require('./routes/blogroutes');

// console.log(process.env);

const app = express();

// app.use(cors());

const dbURI = process.env.MONGOODE_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(process.env.PORT || 3000))
.catch((err) => console.log(err));


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

console.log("Listening");

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", *); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });



app.get('/', (req, res) => {
    res.redirect('/home');
})

// app.get('/home' , (req,res) => {
//     res.render('home' , {titles: 'Home'});
// })

app.get('/data', (req, res) => {
    res.render('data', { titles: 'Data' });
})

// app.get('/home/help', (req, res) => {
//     res.render('help', { titles: 'Help' });
// })

app.get('/about', (req, res) => {
    res.render('about', { titles: 'About' });
})

app.get('/resources', (req, res) => {
    res.render('resources', { titles: 'Resources' });
})

app.use('/home', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { titles: '404' });
});
