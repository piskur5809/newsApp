const express = require('express');
const router = express.Router();

//Item Model
const Article = require('../../models/Item');

// получаем новости на страницу 
router.get('/',(req, res) => {
    Article.find()
    .then(items => res.json(items));  
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
        }).then(items => res.json(items));
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