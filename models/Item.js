const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ArticleSchema = new Schema({
   
author: {
    type: String,  
    require: true
},
title: {
        type: String,
        require: true
    },
    description: { 
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    urlToImage: {
        type: String,
        require: true
    },
    publishedAt:{
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
    userIpLikes:{
        type: Array,
        require: true
    },
    userIpViews:{
        type: Array,
        require: true
    },
    date:{
        type: String,
        require: true},
},
{
    versionKey: false
});
    
module.exports = Article = mongoose.model('article', ArticleSchema);