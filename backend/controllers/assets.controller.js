const Assets = require('../models/assets');
const assetCtrl = {};

assetCtrl.getAssets = async(req, res) => {
    const asset = await Assets.find();
    res.json(asset);
};

assetCtrl.createAssets = async(req, res) => {
    const asset = new Assets(req.body);
    await asset.save();
    res.json({status: 'save done'});
};

assetCtrl.getAssetsById = async(req, res) => {
    const asset = await Assets.findById(req.params.id);
    res.json(asset);
};

assetCtrl.editAssets = async(req, res) => {
    const { id } = req.params;
    const data = {
        service_tag: req.body.service_tag,
        mac_address: req.body.mac_address,
        device_name: req.body.device_name,
        note: req.body.note,
        groups: req.body.groups,
        locations: req.body.locations,
        device_type: req.body.device_type,
        company: req.body.company,
        state: req.body.state
    };
    await Assets.findByIdAndUpdate(id, {$set: data}, {new: true});
    res.json({status: "update"});
};

assetCtrl.deleteAssets = async(req, res) => {
    await Assets.findByIdAndRemove(req.params.id);
    res.json({status: "delete"});
}

module.exports = assetCtrl;