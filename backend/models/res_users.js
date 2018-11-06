const mongoose = require('mongoose');
const { Schema } = mongoose;

const groups = new Schema({
    group: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

const ResUsersSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:  true
    },
    password: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required:  true
    },
    date_at: {
        type: Date,
        default: Date.now
    },
    active: {
        type: String
    },
    state: {
        type: String
    },
    company: {
        type: String,
        required: true
    },
    group: {
        type: groups,
        required: true
    }


});

module.exports = mongoose.model('res_users', ResUsersSchema);