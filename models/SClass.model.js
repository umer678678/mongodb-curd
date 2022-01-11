const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SClassSchema = new Schema({
  student:{
    type:Schema.Types.ObjectId,
    ref:'students'
  },
  subject: {
    type: String,
    required: true
  },
  teacherName: {  
    type: String,
    required: true
  },
  time: {
    type: Number, default: (new Date()).getTime() 
  },
  duration: {
    type: Number 
  }
 
});

module.exports = SClass = mongoose.model('sclass', SClassSchema);