const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResGroupsSchema = new Schema({
    group: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('res_groups', ResGroupsSchema);