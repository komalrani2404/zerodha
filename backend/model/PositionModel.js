

const mongoose = require("mongoose");
const { PositionSchema } = require('../schemas/PositionSchema');

const PositionModel = mongoose.model("position", PositionSchema);
module.exports = { PositionModel };


// const {model}=require("mongoose")
// 
// const {PositionSchema}=require('../schemas/PositionSchema')
// 
// const PositionSchema = new model("holding",PositionSchema);
// module.exports={PositionModel};