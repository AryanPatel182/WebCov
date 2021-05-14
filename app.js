const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const app = express();

const dbURI = 'mongodb+srv://tempuser:test1234@nodetuts.0adna.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

console.log("Listening");


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
