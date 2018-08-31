
export class ResProblems {

    constructor(_id = '', items = '', date = '', subject = '', edit = '', description = '', name = '') {
        this._id = _id;
        this.items = items;
        this.date = date;
        this.subject = subject;
        this.edit = edit;
        this.description = description;
        this.name = name;
    }

    _id: string;
    items: string;
    date: string;
    subject: string;
    edit: string;
    description: string;
    name: string;
};
