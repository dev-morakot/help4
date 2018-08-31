const Equipment = require('../models/res_equipment');
const equipmentCtrl = {};

equipmentCtrl.getEquipment = async (req, res) => {
    const equip = await Equipment.find();
    res.json(equip);
};

equipmentCtrl.createEquipment = async (req, res) => {
    const equip = new Equipment(req.body);
    await equip.save();
    res.json({status: "equipment save"});
};

equipmentCtrl.editEquipment = async (req, res) => {
    const { id } = req.params;
    const result = {
        name: req.body.name
    };
    await Equipment.findByIdAndUpdate(id, {$set: result}, {new: true});
    res.json({status: "equipment update"});
};

equipmentCtrl.deleteEquipment = async (req, res) => {
    await Equipment.findByIdAndRemove(req.params.id);
    res.json({status: "Equipment delete"});
};

module.exports = equipmentCtrl;

