const Suppliers = require('../models/res_supplier');
const SupplierCtrl = {};

SupplierCtrl.getSupplier = async (req, res) => {
    const supplier = await Suppliers.find();
    res.json(supplier);
};

SupplierCtrl.createSupplier = async (req, res) => {
    const supplier = new Suppliers(req.body);
    await supplier.save();
    res.json({status: "Supplier save"});
};

SupplierCtrl.editSupplier = async (req, res) => {
    const { id } = req.params;
    const result = {
        name: req.body.name,
        address: req.body.address,
        district: req.body.district,
        subdistrict: req.body.subdistrict,
        province: req.body.province,
        zipcode: req.body.zipcode,
        email: req.body.email,
        note: req.body.note,
        tel: req.body.tel,
        fax: req.body.fax,
        contact: req.body.contact
    };
    await Suppliers.findByIdAndUpdate(id, {$set: result}, {new: true});
    res.json({status: "supplier update"});
};

SupplierCtrl.deleteSupplier = async (req, res) => {
    await Suppliers.findByIdAndRemove(req.params.id);
    res.json({status: "supplier delete"});
};

module.exports = SupplierCtrl;