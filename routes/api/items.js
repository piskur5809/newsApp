
const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

router.get('/', (req, res)=>{
    // console.log(Item.find().sort(),"Item")
    Item.find()
        .sort({date: -1})
        .then(items=> res.json(items));
    });
        

//route Post api/items

router.post('/', (req, res)=>{
    
    console.log(res.data)
})
    
module.exports = router;