const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResSupplierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    district: {
        type: String
    },
    subdistrict: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
    },
    email: {
        type: String,
    },
    note: {
        type: String
    },
    tel: {
        type: String,
    },
    fax: {
        type: String
    },
    contact: {
        type: String
    }
});

module.exports = mongoose.model('res_suppliers', ResSupplierSchema);