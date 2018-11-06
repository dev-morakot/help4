export class Assets {

    constructor(_id = '', service_tag = '', mac_address = '', 
    device_name = '', create_date = '', groups = '', company = '',
     note = '', locations = '', device_type = '', state = '') {
        this._id = _id;      
        this.service_tag = service_tag;
        this.mac_address = mac_address;
        this.device_name = device_name;
        this.create_date = create_date;
        this.groups = groups;
        this.company = company;
        this.note = note;
        this.locations = locations;
        this.device_type = device_type;
        this.state = state;
    }
    _id: string;
    service_tag: string;
    mac_address: string;
    device_name: string;
    create_date: any;
    groups: any;
    company: string;
    note: string;
    locations: any;
    device_type: any;
    state: any;
};
