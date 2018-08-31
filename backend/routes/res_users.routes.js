const express =require('express');
const router = express.Router();

const users = require('../controllers/res_users.controller');
const problems = require('../controllers/problems.controller');
const res_system = require('../controllers/res_system.controller');
const res_equipment = require('../controllers/res_equipment.controller');
const res_location = require('../controllers/res_locations.controller');
const res_groups = require('../controllers/res_groups.controller');

// Res Users
router.post('/res_users/authenticate', users.Authenticate);
router.get('/res_users/index', users.getResUsers);
router.post('/res_users/form', users.createResUsers);
router.get('/res_users/view/:id', users.getResUsersId);
router.put('/res_users/update/:id', users.editResUsers);
router.delete('/res_users/delete/:id', users.deleteResUsers);

// System Problems
router.get('/system/findall', problems.getProblems);
router.post('/system/insert', problems.createProblems);
router.put('/system/update/:id', problems.editProblems);
router.delete('/system/dellistdata/:id', problems.deleteProblems);

// res_system
router.get('/system/show', res_system.getSystem);
router.post('/system/add', res_system.createSystem);
router.put('/system/edit/:id', res_system.editSystem);
router.delete('/system/delete/:id', res_system.deleteSystem);

// res_equipment
router.get('/equipment/all', res_equipment.getEquipment);
router.post('/equipment/insert', res_equipment.createEquipment);
router.put('/equipment/update/:id', res_equipment.editEquipment);
router.delete('/equipment/delete/:id', res_equipment.deleteEquipment);


// res_location
router.get('/location/show', res_location.getLocation);
router.post('/location/insert', res_location.createLocation);
router.put('/location/update/:id', res_location.editLocation);
router.delete('/location/delete/:id', res_location.deleteLocation);

// res_groups
router.get('/group/show', res_groups.getGroup);
router.post('/group/insert', res_groups.createGroup);
router.put('/group/update/:id', res_groups.editGroup);
router.delete('/group/delete/:id', res_groups.deleteGroup);

module.exports = router;