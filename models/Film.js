const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema(
    {
        _id: Number,
        title: String,
        original_title: String,
        poster_path: String,
        release_date: String,
        overview: String,
        vote_average: Number,
        isStarred: Boolean
    }
)

const filmModel = mongoose.model('Films', filmSchema);

module.exports = filmModel;
