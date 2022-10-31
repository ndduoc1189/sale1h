const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      name: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true,
      },
});

module.exports = mongoose.model('User', OrderSchema);