const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LiveServerStreamTokenSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    purchaseToken: { type: String, required: true },
    transactionId: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    state: { type: String, required: true },
    Time: { type: String, required: true },
    period: { type: String },
    bill: { type: String },
    display_location: { type: Array }
}, { timestamps: true })

module.exports = mongoose.model("LiveStream", LiveServerStreamTokenSchema)