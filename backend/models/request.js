const mongoose = require('mongoose');
const { Schema } = mongoose;

const RequestSchema = new Schema({
    name: {
        type: String
    },
    users: {
        type: Object
    },
    subject: {
        type: String,
        required: true
    },
    note: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    device_type: {
        type: Object
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    state: {
        type: [{
            type: String,
            enum: ['draft', 'confirm', 'checked', 'wait', 'clame', 'close','cancel']
        }],
        default: ['draft']
    }

});

module.exports = mongoose.model('requests', RequestSchema);