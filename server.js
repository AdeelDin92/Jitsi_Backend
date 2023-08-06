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

//Import Schemas
const demoSchema = require('./Schemas/demoSchema')
const Tc0 = require("./Schemas/questionairSchema")





app.use(cors());
app.use(bodyParser.json());


app.post("/Demographics", async (req , res) => {
    //console.log(req.body)
      //res.send(req.body)     
    
   


    
    let demo = new demoSchema({
        Q1:req.body.Q1,
        Q2:req.body.Q2

        });       
   
    
    const doc = await demo.save();
    console.log("Saved in database:" ,doc)
  
})

app.post("/Questionair", async (req ,res) => { 
   
    


  let defaultQuestionair = new Tc0({
    
    Q1:req.body.Q1,
    Q2:req.body.Q2,
    Q3:req.body.Q3,
    Q4:req.body.Q4,
    Q5:req.body.Q5,
    Q6:req.body.Q6
  });
  

  const doc =await defaultQuestionair.save();
  console.log("Saved in database:" ,doc)
  


})

const ipAddress = '127.0.0.1'
const port = 4000;

app.listen(port,ipAddress, () => {
    console.log(`Server listening on port ${port}` );
});