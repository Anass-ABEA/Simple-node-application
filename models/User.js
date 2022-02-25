const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        login: String,
        password: String,
    }
)

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
