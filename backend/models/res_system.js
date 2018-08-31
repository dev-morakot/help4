const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResSystemSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('res_systems', ResSystemSchema);