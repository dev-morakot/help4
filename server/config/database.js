const mongoose = require('mongoose');
class MongoDatabase {
    constructor (db = mongoose) {
        this.mongoose = db;
        this.mongoose.connect('mongodb://localhost/help4');
        this.login = this.mongoose.model('res_users', new this.mongoose.Schema(
            {
                password: String,
                email: String,               
                active: Boolean
            }
        ));
        /*this.users = this.mongoose.model('res_users', new this.mongoose.Schema(
            {
                firstname: String,
                lastname: String,
                username: String,
                password: String,
                email: String,
                code: String,
                date_at: {
                    type: Date,
                    default: Date.now
                },
                state: String,
                company: String,
                group: String,
                active: Boolean
            }
        ));*/
    }
}

module.exports = { MongoDatabase };