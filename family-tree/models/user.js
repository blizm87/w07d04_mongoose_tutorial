var mongoose = require('mongoose');

// Create Schema

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, required: true, unique:true},
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String,
  },
  createAt: Date,
  updateAt: Date
});

var User = mongoose.model('user', userSchema);

module.exports = User;
