const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    pageTitle: {
        type: String,
        required: true
    },
    filmName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        unique: true,
        required: true
    },
    key: {
        type: String,
        unique: true,
        required: true
    },
    poster1:{
        type: String,
        required: true
    },
    poster2:{
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    views:{
        type:Number,
        default:0,
    },
    data:{
        type: Date, 
        required: true
    }

})

module.exports = mongoose.model('video', videoSchema)
