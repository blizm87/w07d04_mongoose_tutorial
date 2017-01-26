var mongoose = require('mongoose');

// Create Schema

var bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: {type:String, required:true, unique:true},
  published: Date
});

var bookDetails = mongoose.model('books', bookSchema);

module.exports = bookDetails;
