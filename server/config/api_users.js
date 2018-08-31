const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const LoginComponent = require('../components/login.component');
const Login = new LoginComponent();

// ลืมรหัสผ่าน
router.post('/authenticate', (req, res) => {
    res.sendAsyncApi(Login.auth(req.body));
    
});



module.exports = router;