const express = require('express');
const cors = require('cors')
const bodyParser = require ('body-parser');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const PORT = process.env.PORT || 4000

// Database connection 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
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
        Q7:req.body.Q7,
        Q8:req.body.Q8,       
        Q9:req.body.Q9,
        Q10:req.body.Q10,
        Q8_text:req.body.Q8_text,
        Q10_text:req.body.Q10_text


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



/// Handle condition 1 panas submission and save the data to MongoDB
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

  try {
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

    const savedPANAS = await newPANAS.save();

    console.log("Saved in database successfully", savedPANAS);
    res.status(201).json({ message: "PANAS data saved successfully", savedPANAS });
  } catch (error) {
    console.error("Error saving PANAS data:", error);
    res.status(500).json({ error: "Error saving PANAS data" });
  }
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

  try {
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

    const savedPANAS = await newPANAS.save();

    console.log("Saved in database successfully", savedPANAS);
    res.status(201).json({ message: "PANAS data saved successfully", savedPANAS });
  } catch (error) {
    console.error("Error saving PANAS data:", error);
    res.status(500).json({ error: "Error saving PANAS data" });
  }
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

  try {
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

    const savedPANAS = await newPANAS.save();

    console.log("Saved in database successfully", savedPANAS);
    res.status(201).json({ message: "PANAS data saved successfully", savedPANAS });
  } catch (error) {
    console.error("Error saving PANAS data:", error);
    res.status(500).json({ error: "Error saving PANAS data" });
  }
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

  try {
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

    const savedPANAS = await newPANAS.save();

    console.log("Saved in database successfully", savedPANAS);
    res.status(201).json({ message: "PANAS data saved successfully", savedPANAS });
  } catch (error) {
    console.error("Error saving PANAS data:", error);
    res.status(500).json({ error: "Error saving PANAS data" });
  }
});





//Connection to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})