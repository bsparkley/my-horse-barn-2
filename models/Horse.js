var mongoose = require('mongoose');

var HorseSchema = new mongoose.Schema({
    name: String,
    breed: String,
    height: String,
    description: String,
    color: String,
    hay: String,
    treat: String,
    img: String
  });

  module.exports = mongoose.model('Horse', HorseSchema);