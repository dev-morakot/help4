const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResEquipmentSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('res_equipments', ResEquipmentSchema);