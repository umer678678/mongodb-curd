const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    default: Date.now
  },
  facebookProfile:{
      type:String
  }
});

module.exports = Student = mongoose.model('students', StudentSchema);