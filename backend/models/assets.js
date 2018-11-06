const mongoose = require('mongoose');
const { Schema } = mongoose;

const AssetsSchema = new Schema({
    service_tag: {
        type:String
    },
    mac_address: {
        type: String
    },
    device_name: {
        type: String
    },
    groups: {
        type: Object
    },
    locations: {
        type: Object
    },
    note: {
        type: String
    },
    device_type: {
        type: Object
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    company: {
        type: String
    },
    state: {
        type: String
    }


});

module.exports = mongoose.model('res_assets', AssetsSchema);