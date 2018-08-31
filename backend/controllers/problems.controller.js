const Problems = require("../models/problems");
const problemsCtrl = {};

problemsCtrl.getProblems = async(req, res) => {
    const problems = await Problems.find();
    res.json(problems);
};

problemsCtrl.createProblems = async (req, res) => {
    const problems = new Problems(req.body);
    await problems.save();
    res.json({status: "save done"});
};

problemsCtrl.getProblemsById = async (req, res) => {
    const problems = await Problems.findById(req.params.id);
    res.json(problems);
};

problemsCtrl.editProblems = async (req, res) => {
    const { id } = req.params;
    const dataSystem = {
        items: req.body.items,
        date: req.body.date,
        subject: req.body.subject,
        edit: req.body.edit,
        description: req.body.description,
        name: req.body.name
    };
    await Problems.findByIdAndUpdate(id, {$set: dataSystem}, {new: true});
    res.json({status: "update"});
};

problemsCtrl.deleteProblems = async (req, res) => {
    await Problems.findByIdAndRemove(req.params.id);
    res.json({status: "problems delete"});
}

module.exports = problemsCtrl;