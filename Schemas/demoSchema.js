const mongoose = require('mongoose');
const { Schema } = mongoose;


const questionsSchema = new Schema({
    Q1:  String,
  Q2: String,
  Q3: String,
  Q4:String, // String is shorthand for {type: String}
  
})


module.exports = mongoose.model("demoSchema",questionsSchema)