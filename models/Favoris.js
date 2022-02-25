const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const favoriSchema = new mongoose.Schema(
    {
        _id: {type: ObjectId, default: ObjectId},
        film: {type: String, required: true},
        user: {
            type: Number, required: true, ref: "User"
        }
    }
)

const favorisModel = mongoose.model('Favoris', favoriSchema);

module.exports = favorisModel;
