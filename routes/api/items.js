const express = require('express');
const router = express.Router();
const axios = require ('axios')

//Item Model
const Article = require('../../models/Item');

router.get('/',(req, res) => {
// получает новости с API и записывает в базу
    axios
    .get(require('../../config/keys').apiURI)
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
 
// удаляет старую коллекцию с новостями предыдущего дня
    Article.deleteMany({date: reqDate.getYesterday()},(err, doc)=>{
        if(err) console.log(err);
   });

 // не получается синхронизировать запросы, поэтому отправка данных клиенту установлена через setTimeout
    const renderNews = ()=>{
        Article.find()
            .then(items => res.json(items))
            .catch(err => console.log(err));
   }
   setTimeout(renderNews, 3000)
});

// запись просмотров и лайков 
// если честно не смог разделить посты с лайками и просмотрами, поэтому сделал проверку запроса внутри
router.post('/:id', (req, res) => {
   
    // проверка лайков
   if(req.body.likes) {
   
        let addLikes = req.body.elem.likes;
        let addIp = req.body.elem.userIpLikes;
            // проверка на наличие IP в базе
        if(!addIp.includes(req.ip)){
            addLikes++;
            addIp.push(req.ip);
            // если IP не существует обновляем базу
            Article.findOneAndUpdate({_id:req.params.id}, {likes: addLikes, userIpLikes: addIp }, {new: true}, (err, item)=>{
            if(err){
                console.log(err);
            }
        }).then(items => {
            res.json(items)});
        };   
    };
    // проверка просмотров
    if(req.body.views){

        let addViews = req.body.elem.views;
        let addIp = req.body.elem.userIpViews;
        // проверка на наличие IP в базе
        if(!addIp.includes(req.ip)){
            addViews++;
            addIp.push(req.ip);
            // если IP не существует обновляем базу
            Article.findOneAndUpdate({_id:req.params.id}, {views: addViews, userIpViews: addIp }, {new: true}, (err, item)=>{
                if(err){
                    console.log(err);
                }
            }).then(items => res.json(items));
        };     
    };

});

module.exports = router;