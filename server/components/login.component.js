const validate = require('validate.js');
const database = require('../config/database');

class LoginComponent {

    constructor(valid = validate, db = database.MongoDatabase) {
        // connection  mongodb
        this._database = new db();

        // สร้าง validate
        this._validate = valid;
        this._validate.validators.presence.message = 'ห้ามเป็นค่าว่าง';
        this._validate.validators.format.message = 'ไม่ตรงกับรูปแบบที่กำหนด';
       this.validate_rules = {
           email: {
                presence: {
                    allowEmpty: false
                }
           },
           password: {
                presence: {
                    allowEmpty: false
                }
           }
       };
    }

    async auth(value) {
        const errors = this._validate(value, this.validate_rules);
        if(errors) throw {errors};
        let input = {
            email: value.email,
            password: value.password
        };
        return await new this._database.login.find(input);
       
    }

}

module.exports = LoginComponent;

