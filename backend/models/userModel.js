const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a username"]
    },
    score: {
        type: Number,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
    rank: {
        type: Number,
        required: true
    }

}, {
    timestamps: true,
})



const User = mongoose.model("User", userSchema)
module.exports = User