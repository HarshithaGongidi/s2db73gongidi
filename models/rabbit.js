const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
    age: String,
    color: String,
    weight: String
})

module.exports = mongoose.model("rabbit", rabbitSchema)