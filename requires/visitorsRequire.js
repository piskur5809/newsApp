const Visitor = require('../models/Visitor');

const reqDate = require('./date');
// создает коллецию с IP адресами пользователей на текущий день
function newVisitors (){
        Visitor.find({date: reqDate.getToday()},(err, doc)=>{
          
            if(!doc.length){ 
                Visitor.create({ 
                    visitorsIp: [doc.ip],
                    date: reqDate.getToday()
                }); 
            };
            if(err) console.log(err);
        }); 
    }
// удаляет старую коллекцию с IP адресами пользователей предыдущего дня
function deleteVisitors () {
    Visitor.deleteMany({date: reqDate.getYesterday()},(err, doc)=>{
        if(err) console.log(err);
   })  
}

    module.exports.newVisitors = newVisitors;
    module.exports.deleteVisitors = deleteVisitors;