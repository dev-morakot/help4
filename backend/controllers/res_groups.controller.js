const Groups = require('../models/res_groups');
const GroupCtrl = {};

GroupCtrl.getGroup = async (req, res) => {
    const group = await Groups.find();
    res.json(group);
};

GroupCtrl.createGroup = async (req, res) => {
    const group = new Groups(req.body);
    await group.save();
    res.json({status: "Group save"});
};

GroupCtrl.editGroup = async (req, res) => {
    const { id } = req.params;
    const result = {
        name: req.body.name
    };
    await Groups.findByIdAndUpdate(id, {$set: result}, {new: true});
    res.json({status: "group update"});
};

GroupCtrl.deleteGroup = async (req, res) => {
    await Groups.findByIdAndRemove(req.params.id);
    res.json({status: "groups delete"});
};

module.exports = GroupCtrl;