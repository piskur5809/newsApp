const axios=require('axios');
const reqDate = require('./date');
const Article = require('../models/Item');

// получает новости с API и записывает в базу
const addNews = () => {
    // запрос к API
    axios
    .get(require('../config/keys').apiURI)
    .then(res=> {
        // перебор массива с новостями и добавление свойств
        res.data.articles.forEach( element => {

                // ищет новости в базе и в случае их отсутствия добавляет новые 
                // поиск осуществляется по дате публикации (приходит от API)
            Article.find({publishedAt: element.publishedAt}, (err, doc)=>{
                
                if(!doc.length){ 
                    Article.create({ 
                        author: element.author,  
                        title: element.title,
                        description: element.description,
                        content: element.content,
                        urlToImage: element.urlToImage,
                        publishedAt: element.publishedAt,
                        views: 0,
                        likes: 0,
                        usersIP: [],
                        date: reqDate.getToday()
                    });
                };
                
                if(err) console.log(err);
            });
        });
    })
    .catch(err=> console.log(err)); 
 };

// удаляет старую коллекцию с новостями предыдущего дня
 const deleteNews = () => {
    Article.deleteMany({date: reqDate.getYesterday()},(err, doc)=>{
        if(err) console.log(err);
   });
 };

 module.exports.addNews = addNews;
 module.exports.deleteNews = deleteNews;
