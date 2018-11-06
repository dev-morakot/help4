const Requests = require('../models/request');
const genCode = require('../models/config');
const requestCtrl = {};
const post = new genCode();


requestCtrl.getRequest = async(req, res) => {
    const request = await Requests.find();
    res.json(request);
};

requestCtrl.createRequest = async (req, res) => {
    const data = {
       name: post.genDocNo(),
       subject: req.body.subject,
       description: req.body.description,
       note: req.body.note,
    };
    const request = new Requests(data);
    await request.save();
    res.json({status: "request save"});
};

requestCtrl.getRequestId = async (req, res) => {
    const ids = await Requests.findById(req.params.id);
    res.json(ids);
};

requestCtrl.editRequest = async (req, res) => {
    const { id } = req.params;
    const requests = {
        device_type: req.body.device_type,
        subject: req.body.subject,
        description: req.body.description,
        note: req.body.description,        
    };
    await Requests.findByIdAndUpdate(id, {$set, requests},{
        new: true
    });
    res.json({
        status: "Request update"
    });

};

requestCtrl.deleteRequest = async(req, res) => {
    await Requests.findByIdAndRemove(req.params.id);
    res.json({status: "Request delete"});
};

module.exports = requestCtrl;
