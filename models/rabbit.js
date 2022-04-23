const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
    age:{
        type: String,
        maxLength: 10
    },
    color:{
        type: String,
        minLength: 3
    },
    weight: String
})

module.exports = mongoose.model("rabbit", rabbitSchema)