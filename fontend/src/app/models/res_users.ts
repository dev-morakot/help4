export class Users {
    constructor(_id = '', firstname = '', lastname = '', username = '', password = '',
    email = '', code = '', date_at = '', active = '', state = '', company = '', group = '') {
        this._id = _id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.email  = email;
        this.code = code;
        this.date_at = date_at;
        this.active = active;
        this.state = state;
        this.company = company;
        this.group = group;

    }
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    code: string;
    date_at: any;
    active: any;
    state: string;
    company: string;
    group: any;

}