const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    helptype: {
        type: String,
        required: true
    },
    mrms: {
        type: String,
        required: true
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    email: {
        type: String,        
        required: false
    },
    contact: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    district: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;

