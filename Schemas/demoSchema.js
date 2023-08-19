const mongoose = require('mongoose');
const { Schema } = mongoose;


const questionsSchema = new Schema({
    
    Q1:  String,
    Q2: String,
    Q3: String,
    Q4:String,
    Q5:String,
    Q6:String,
    Q7:String // String is shorthand for {type: String}
  
})


module.exports = mongoose.model("demographics",questionsSchema)