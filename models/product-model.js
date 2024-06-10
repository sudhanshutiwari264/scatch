const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  image: {
    type:String,
    minLength:3,
    trim:true,
  },
  name: String,
  price : Number,
  discount : {
    type:Number,
    default: 0
  },
  bgcolour : String,
  panelColor : String,
  textcolor : String
});

module.exports = mongoose.model('product',productSchema);
