const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
    age:{
        type: String,
    },
    color:{
        type: String,
    },
    weight: String
})
module.exports = mongoose.model("Rabbit", rabbitSchema)