const mongoose = require('mongoose');
const { Schema } = mongoose;

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
        type: Boolean
    },
    state: {
        type: String
    },
    company: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('res_users', ResUsersSchema);