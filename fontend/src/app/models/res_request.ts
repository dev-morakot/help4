export class Request {

    constructor (
        _id = '',
        device_type = '',
        subject = '',
        users = '',
        note = '',
        description = '',
        create_date = '',
        state = '',
        name = '',

     ) {
        this._id = _id;
        this.device_type = device_type;
        this.subject = subject;
        this.users = users;
        this.note = note;
        this.description = description;
        this.create_date = create_date;
        this.state = state;
        this.name = name;
    }
    _id: string;
    device_type: any;
    subject: string;
    users: any;
    note: string;
    description: string;
    create_date: any;
    state: string;
    name: string;

};