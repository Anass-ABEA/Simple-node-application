const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const commentSchema = new mongoose.Schema(
    {
        _id: {type: ObjectId, default: ObjectId},
        message: String,
        date: {type: Date, default: Date.now()},
        user: {
            type: String, required: true, ref: "User"
        },
        film: {
            type: String, required: true
        }
    }
)

const commentModel = mongoose.model('Comments', commentSchema);

module.exports = commentModel;
