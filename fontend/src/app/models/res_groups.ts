
export class Group {

    constructor(_id = '',group = '', department = '') {
        this._id = _id;      
        this.group = group;
        this.department = department;
    }
    _id: string;
    group: string;
    department: string;
};
