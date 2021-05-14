const Blog = require('../models/blog');




const blog_create_get = (req, res) => {
    res.render('help', { titles: 'Help' });
}


const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('home', { blogs: result, titles: 'Home' });
        })
        .catch(err => {
            console.log(err);
        });
    // res.render('home', { titles: 'Home' });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            res.redirect('/home');
        })
        .catch(err => {
            console.log(err);
        });
}


module.exports = {
    blog_create_get,
    blog_index,
    blog_create_post
}