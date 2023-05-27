const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv  = require('dotenv')
dotenv.config()

app.use(bodyParser.json())
app.use(cors())

DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(()=>{
    console.log("Mongo DB connected")
})

const investigationSchema = new mongoose.Schema({
    imageURL:String,
    title:String,
    desc:String,
    price:Number
})

const investigationModel = mongoose.model('investigationModel', investigationSchema)

app.post("/api/investigators", async(req,res)=>{
    const {imageURL, title, desc, price} = req.body;

    const newInvestigators = new investigationModel({
        imageURL:imageURL,
        title:title,
        desc:desc,
        price:price
    })

    await newInvestigators.save()
    res.status(201).send("data created succesfully")
})

app.get("/api/investigators", async(req,res)=>{
    const {title} = req.query
    const allInvestigators = await investigationModel.find()
    if(title===undefined){
        res.status(200).send({
            data:allInvestigators,
            message:'data get succesfully'
        })
    }
    else{
        res.status(200).send({
            data: allInvestigators.filter((x)=>x.title.toLowerCase().trim().includes(title.toLowerCase().trim())),
            message:'data get succesfully'
        })
    }
})

app.get("/api/investigators/:id", (req,res)=>{
    const id = req.params.id
   investigationModel.findById(id).then((investigator)=>{
        res.status(200).send({
            data:investigator,
            message:'data get succesfully'
        })

    }).catch((err)=>{
        res.send('data not found')
    })
})

app.delete("/api/investigators/:id", async(req,res)=>{
    const {id} = req.params
    
    const deletedInvestigator = await investigationModel.findByIdAndDelete(id)

    if(deletedInvestigator==undefined){
       res.status(404).send('data not found')
    }
    else{
        res.status(200).send({
            data:deletedInvestigator,
            message:'data deleted succesfully'
        })
    }
})

app.put("/api/investigators/:id", async(req,res)=>{
    const {id} = req.params
    const {imageURL, title, desc, price} = req.body;
    const existedInvestigator = await investigationModel.findByIdAndUpdate(id,{imageURL:imageURL, title:title, desc:desc, price:price})

    if(existedInvestigator==undefined){
        res.status(404).send('data not found')
    }
    else{
        res.status(200).send({
            data:existedInvestigator,
            message:'data edited succesfully'
        })
    }
})

app.get('/api', (req, res) => {
  res.send('Hello Investigate!')
})

PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})