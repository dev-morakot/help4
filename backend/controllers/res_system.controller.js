const Systems = require('../models/res_system');
const systemsCtrl = {};

systemsCtrl.getSystem = async(req, res) => {
    const system = await Systems.find();
    res.json(system);
};

systemsCtrl.createSystem = async(req, res) => {
    const system = new Systems(req.body);
    await system.save();
    res.json({status: "system save"});
};

systemsCtrl.getSystemById = async(req, res) => {
    const system = await Systems.findById(req.params.id);
    res.json(system);
};

systemsCtrl.editSystem = async(req, res) => {
    const { id } = req.params;
    const result = {
        name: req.body.name
    };
    await Systems.findByIdAndUpdate(id, {$set: result}, {new: true});
    res.json({status: "system update"});
};


systemsCtrl.deleteSystem = async (req, res) => {
    await Systems.findByIdAndRemove(req.params.id);
    res.json({status: 'system delete'});
};

module.exports = systemsCtrl;