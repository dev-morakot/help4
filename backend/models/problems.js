const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProblemsSchema = new Schema({
    items: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now
    },
    subject: {
        type: String,
        required: true
    },
    edit: {
        type: String
    },
    description: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('system_problems', ProblemsSchema);