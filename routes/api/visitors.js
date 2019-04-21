const express = require('express');
const router = express.Router();

// Date
const reqDate = require('../../requires/date');

//Item Model
const Visitor = require('../../models/Visitor');

router.get('/',(req, res) => {
  Visitor.find({})
  .then(items => res.json(items));  
});

router.post('/', (req, res) => {
  Visitor.find({})
  .then(items =>  {
    const addIp = items[0].visitorsIp;
        // проверка на наличие IP в базе данных 
      if(!addIp.includes(req.ip)){
    
        addIp.push(req.ip);
        
      };
      // обновляем базу с IP адресами 
      Visitor.findOneAndUpdate({date: reqDate.getToday()}, {visitorsIp: addIp}, (err, item)=>{ 
        if(err) console.log(err);
      })
      .then(items => res.json(items));
  });
});

module.exports = router;