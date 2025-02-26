const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
    title: String,
    descritpion: String,
    author: String,
    imageUrl: String,
}, { timestamps: true })

module.exports = mongoose.model("BlogPost", blogPostSchema);