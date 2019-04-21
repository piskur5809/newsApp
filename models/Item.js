const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ItemSchema = new Schema({
    author: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    urlToImage: {
        type: String,
        require: true
    },
    publishedAt: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        require: true
    },
    views: {
        type: Number,
        require: true
    },
    
});

module.exports = Item = mongoose.model('item', ItemSchema);