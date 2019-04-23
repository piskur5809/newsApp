const express = require('express');
const router = express.Router();

// Date
const reqDate = require('../../requires/date');

//Item Model
const Visitor = require('../../models/Visitor');

router.get('/',(req, res) => {
  Visitor.find({date: reqDate.getToday()},(err, doc)=>{
  
    // проверка на наличие коллекции в базе данных 
    if(!doc.length){ 
      // Создание новой коллекции
        Visitor.create({ 
            visitorsIp: [req.ip],
            date: reqDate.getToday()
        })
        .then(items => res.json(items)); 

        // проверка на наличие IP в базе данных 
    } else if(!doc[0].visitorsIp.includes(req.ip)){
        const addIp = doc[0].visitorsIp
        addIp.push(req.ip)
        // обновляем базу с IP адресами
        Visitor.findOneAndUpdate({date: reqDate.getToday()}, {visitorsIp: addIp}, (err, item)=>{ 
                if(err) console.log(err);
              })
              .then(items => res.json(items))

      
    } else {
      //если коллекция существует и IP адрес уже записан, отправляем данные клиенту
      res.send(doc[0])
    }
    if(err) console.log(err);
  });   
});

module.exports = router;