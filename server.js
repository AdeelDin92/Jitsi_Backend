const express = require('express');
const cors = require('cors')
const bodyParser = require ('body-parser');
const app = express();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  //await mongoose.connect('mongodb+srv://mythesisusername:Warning_7776@clusterthesis.ldl538f.mongodb.net/mythesisdb?retryWrites=true&w=majority')
   await mongoose.connect('mongodb+srv://mythesisusername:Warning_7776@clusterthesis.ldl538f.mongodb.net/mythesisdb?retryWrites=true&w=majority');
  //await mongoose.connect("mongodb+srv://clusterthesis.ldl538f.mongodb.net/mythesisdb" )
  console.log("db connected")

}


const demoSchema = require('./Schemas/demoSchema')



app.use(cors());
app.use(bodyParser.json());

app.post("/Demographics", async (req , res) => {
    console.log(req.body)
    res.send(req.body)
    
    
    //let demo = new demoSchema();         
    /*demo.Q1 = req.body.Q1;
    demo.Q2 = req.body.Q2;
    demo.Q3 = req.body.Q3;
    demo.Q4 = req.body.Q4;
    
    const doc = await demo.save();
    */
    
})

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});