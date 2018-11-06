const ResUsers = require('../models/res_users');
const usersCtrl = {};

usersCtrl.Authenticate = async (req, res) => {
    
    const data = {
        email: req.body.email,
        password: req.body.password
    };
    const users = await ResUsers.find(data)
    res.json(users);
   
};

usersCtrl.userFindById = async (req , res) => {
    const a = await ResUsers.findOne({'email': new RegExp(req.body.email, 'i')}, function (err, docs) {
        res.json(docs);
    });
    
};

usersCtrl.getResUsers = async (req, res) => {
    const users = await ResUsers.find();
    res.json(users);
};

usersCtrl.createResUsers = async (req, res) => {
    const users = new ResUsers(req.body);
    await users.save();
    res.json({status: "users save"});
};

usersCtrl.getResUsersId = async (req, res) => {
    const users = await ResUsers.findById(req.params.id);
    res.json(users);
}

usersCtrl.editResUsers = async (req, res) => {
    const { id } = req.params;
    const users = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,        
        email: req.body.email,
        password: req.body.password,
        code: req.body.code,
        active: req.body.active,
        state: req.body.state,
        company: req.body.company,
        group: req.body.group
    };
    await ResUsers.findByIdAndUpdate(id, {$set: users}, {new: true});
    res.json({
        status: 'ResUsers update'
    });
};

usersCtrl.deleteResUsers = async(req, res) => {
    await ResUsers.findByIdAndRemove(req.params.id);
    res.json({status: 'ResUsers delete'});
};

module.exports = usersCtrl;