const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
    age:{
        type: String,
        minLength: 10
    }, 
    color: {
        type: String,
        minLength: 11
     },

    weight: String
})

module.exports = mongoose.model("rabbit", rabbitSchema)