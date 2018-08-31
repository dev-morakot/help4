const Locations = require('../models/res_locations');
const locationCtrl = {};

locationCtrl.getLocation = async (req, res) => {
    const location = await Locations.find();
    res.json(location);
};

locationCtrl.createLocation = async (req, res) => {
    const location = new Locations(req.body);
    await location.save();
    res.json({status: "location save"});
};

locationCtrl.editLocation = async (req, res) => {
    const { id } = req.params;
    const result = {
        name: req.body.name
    };
    await Locations.findByIdAndUpdate(id, {$set: result}, {new: true});
    res.json({status: "location update"});
};

locationCtrl.deleteLocation = async (req, res) => {
    await Locations.findByIdAndRemove(req.params.id);
    res.json({status: "location delete"});
};

module.exports = locationCtrl;