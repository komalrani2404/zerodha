

const mongoose = require("mongoose");
const { HoldingSchema } = require('../schemas/HoldingSchema');

const HoldingModel = mongoose.model("holding", HoldingSchema);
module.exports = { HoldingModel };

// const {model}=require("mongoose")

// const {HoldingSchema}=require('../schemas/HoldingSchema')

// const HoldingModel = new model("holding",HoldingSchema);
// module.exports={HoldingModel};