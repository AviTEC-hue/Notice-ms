const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotifySchema = new Schema({
    userId: { type: String },
    type: { type: String },
    statement: { type: String },
    description: { type: String },
    date: { type: String }
})

NotifySchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model('Notify-BD', NotifySchema);