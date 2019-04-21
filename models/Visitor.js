const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const VisitorSchema = new Schema({
  visitorsIp: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: true
  }
},
{ 
    versionKey: false
});

module.exports = Visitor = mongoose.model('visitor', VisitorSchema);
