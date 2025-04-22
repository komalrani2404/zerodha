
require('dotenv').config();

const bodyParser=require("body-parser")
const cors=require("cors")

const express = require('express');
const app=express();
const mongoose=require("mongoose");

app.use(cors());
app.use(bodyParser.json());


const port=process.env.port||3002;

const url=process.env.MONGO_URL||3002;

const { HoldingModel}=require('./model/HoldingModel');

const { PositionModel}=require('./model/PositionModel');
const {OrderModel}=require("./model/OrderModel")
// app.get('/addholding',async(req,res)=>{
    // let data=[
        // {
            // product: "CNC",
            // name: "EVEREADY",
            // qty: 2,
            // avg: 316.27,
            // price: 312.35,
            // net: "+0.58%",
            // day: "-1.24%",
            // isLoss: true,
        //   },
        //   {
            // product: "CNC",
            // name: "JUBLFOOD",
            // qty: 1,
            // avg: 3124.75,
            // price: 3082.65,
            // net: "+10.04%",
            // day: "-1.35%",
            // isLoss: true,
        //   },
// 
    // ]
    // data.forEach((item)=>{
        // let newholding=new PositionModel({
            // product:item.product,
            // name: item.name,
            // qty: item.qty,
            // avg: item.avg,
            // price: item.price,
            // net: item.net,
            // day: item.day,
            // isLoss: item.isLoss,
        // })
        // newholding.save();
    // })
    // res.send("done")
// })
app.get("/allHoldings",async(req,res)=>{
    let allHolding=await HoldingModel.find({})
    res.json(allHolding);
})

app.get("/allPositions",async(req,res)=>{
    let allPosition=await PositionModel.find({})
    res.json(allPosition);
    // res.send("hello")
   
})

app.post("/newOrder",async(req,res)=>{
    let newOrder=new OrderModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
    });
    newOrder.save();
    res.send("order save")
})

app.listen(port,()=>{
    console.log("app start")
    mongoose.connect(url)
    console.log("db connected")
    
})