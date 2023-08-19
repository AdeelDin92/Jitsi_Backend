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
const demographics = require('./Schemas/demoSchema')
const Tc1 = require("./Schemas/questionairSchema1")
const Tc2 = require ("./Schemas/questionairSchema2")
const Tc3 = require ("./Schemas/questionairSchema3")
const Tc4 = require ("./Schemas/questionairSchema4")

const PANAS1 = require('./Schemas/panasSchema1');
const PANAS2 = require('./Schemas/panasSchema2');
const PANAS3 = require('./Schemas/panasSchema3');
const PANAS4 = require('./Schemas/panasSchema4');







app.use(cors());
app.use(bodyParser.json());


app.post("/Demographics", async (req , res) => {
      //console.log(req.body)
      //       


    
    let demo = new demographics({
        Q1:req.body.Q1,
        Q2:req.body.Q2,
        Q3:req.body.Q3,
        Q4:req.body.Q4,
        Q5:req.body.Q5,
        Q6:req.body.Q6,
        Q7:req.body.Q7


        });       
   
        res.send(req.body)
    const doc = await demo.save();
    console.log("Saved in database:" ,doc)
  
})

app.post("/Questionair_1", async (req ,res) => {   
    
  let defaultQuestionair = new Tc1({
    
    Q1:req.body.Q1,
    Q2:req.body.Q2,
    Q3:req.body.Q3,
    Q4:req.body.Q4,
    Q5:req.body.Q5,
    Q6:req.body.Q6,
    Q5_text:req.body.Q5_text,
    Q6_text:req.body.Q6_text
  });
  
  res.send(req.body)
  const doc =await defaultQuestionair.save();
  console.log("Saved in database:" ,doc)


})

// Handle second test condition questionair submission and save data to MOngoDB

app.post("/Questionair_2", async (req ,res) => {   
    
  let defaultQuestionair = new Tc2({
    
    Q1:req.body.Q1,
    Q2:req.body.Q2,
    Q3:req.body.Q3,
    Q4:req.body.Q4,
    Q5:req.body.Q5,
    Q6:req.body.Q6,
    Q5_text:req.body.Q5_text,
    Q6_text:req.body.Q6_text
  });
  
  res.send(req.body)
  const doc =await defaultQuestionair.save();
  console.log("Saved in database:" ,doc)


})

// Handle third test condition questionair submission and save data to MOngoDB

app.post("/Questionair_3", async (req ,res) => {   
    
  let defaultQuestionair = new Tc3({
    
    Q1:req.body.Q1,
    Q2:req.body.Q2,
    Q3:req.body.Q3,
    Q4:req.body.Q4,
    Q5:req.body.Q5,
    Q6:req.body.Q6,
    Q5_text:req.body.Q5_text,
    Q6_text:req.body.Q6_text
  });
  
  res.send(req.body)
  const doc =await defaultQuestionair.save();
  console.log("Saved in database:" ,doc)


})


// Handle fourth test condition questionair submission and save data to MOngoDB

app.post("/Questionair_4", async (req ,res) => {   
    
  let defaultQuestionair = new Tc4({
    
    Q1:req.body.Q1,
    Q2:req.body.Q2,
    Q3:req.body.Q3,
    Q4:req.body.Q4,
    Q5:req.body.Q5,
    Q6:req.body.Q6,
    Q5_text:req.body.Q5_text,
    Q6_text:req.body.Q6_text
  });
  
  res.send(req.body)
  const doc =await defaultQuestionair.save();
  console.log("Saved in database:" ,doc)


})



// Handle condition 1 panas submission and save the data to MongoDB
app.post('/submit_panas_1', async (req, res) => {
  const {
    active,
    interested,
    excited,
    determined,
    inspired,
    attentive,
    distressed,
    annoyed,
    scared,
    irritated,
    nervous,
    guilty,
  } = req.body;

  const newPANAS = new PANAS1({
    active: parseInt(active),
    interested: parseInt(interested),
    excited: parseInt(excited),
    determined: parseInt(determined),
    inspired: parseInt(inspired),
    attentive: parseInt(attentive),
    distressed: parseInt(distressed),
    annoyed: parseInt(annoyed),
    scared: parseInt(scared),
    irritated: parseInt(irritated),
    nervous: parseInt(nervous),
    guilty: parseInt(guilty),
  });

    const panasData = await newPANAS.save() 
    res.send(req.body)
    console.log("Saved in database successfully" , panasData)

 
});



// Handle condition 2 panas submission and save the data to MongoDB
app.post('/submit_panas_2', async (req, res) => {
  const {
    active,
    interested,
    excited,
    determined,
    inspired,
    attentive,
    distressed,
    annoyed,
    scared,
    irritated,
    nervous,
    guilty,
  } = req.body;

  const newPANAS = new PANAS2({
    active: parseInt(active),
    interested: parseInt(interested),
    excited: parseInt(excited),
    determined: parseInt(determined),
    inspired: parseInt(inspired),
    attentive: parseInt(attentive),
    distressed: parseInt(distressed),
    annoyed: parseInt(annoyed),
    scared: parseInt(scared),
    irritated: parseInt(irritated),
    nervous: parseInt(nervous),
    guilty: parseInt(guilty),
  });

    const panasData = await newPANAS.save() 
    res.send(req.body)
    console.log("Saved in database successfully" , panasData)

 
});








// Handle condition 3 panas submission and save the data to MongoDB
app.post('/submit_panas_3', async (req, res) => {
  const {
    active,
    interested,
    excited,
    determined,
    inspired,
    attentive,
    distressed,
    annoyed,
    scared,
    irritated,
    nervous,
    guilty,
  } = req.body;

  const newPANAS = new PANAS3({
    active: parseInt(active),
    interested: parseInt(interested),
    excited: parseInt(excited),
    determined: parseInt(determined),
    inspired: parseInt(inspired),
    attentive: parseInt(attentive),
    distressed: parseInt(distressed),
    annoyed: parseInt(annoyed),
    scared: parseInt(scared),
    irritated: parseInt(irritated),
    nervous: parseInt(nervous),
    guilty: parseInt(guilty),
  });

    const panasData = await newPANAS.save() 
    res.send(req.body)
    console.log("Saved in database successfully" , panasData)

 
});







// Handle condition 4 panas submission and save the data to MongoDB
app.post('/submit_panas_4', async (req, res) => {
  const {
    active,
    interested,
    excited,
    determined,
    inspired,
    attentive,
    distressed,
    annoyed,
    scared,
    irritated,
    nervous,
    guilty,
  } = req.body;

  const newPANAS = new PANAS4({
    active: parseInt(active),
    interested: parseInt(interested),
    excited: parseInt(excited),
    determined: parseInt(determined),
    inspired: parseInt(inspired),
    attentive: parseInt(attentive),
    distressed: parseInt(distressed),
    annoyed: parseInt(annoyed),
    scared: parseInt(scared),
    irritated: parseInt(irritated),
    nervous: parseInt(nervous),
    guilty: parseInt(guilty),
  });

    const panasData = await newPANAS.save() 
    res.send(req.body)
    console.log("Saved in database successfully" , panasData)

 
});





const ipAddress = '127.0.0.1'
const port = 4000;

app.listen(port,ipAddress, () => {
    console.log(`Server listening on port ${port}` );
});