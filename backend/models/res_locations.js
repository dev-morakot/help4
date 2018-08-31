const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocationsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('res_locations', LocationsSchema);