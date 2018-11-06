export class Supplier {
    constructor (_id = '', name = '', address = '', district = '',
        subdistrict = '', province = '', zipcode = '', email = '', note = '', tel = '', fax = '', contact = '') {
            this._id = _id;
            this.name = name;
            this.address = address;
            this.district = district;
            this.subdistrict = subdistrict;
            this.province = province;
            this.zipcode = zipcode;
            this.email = email;
            this.note = note;
    }
    _id: string;
    name: string;
    address: string;
    district: string;
    subdistrict: string;
    province: string;
    zipcode: string;
    email: string;
    note: string;
    tel: string;
    fax: string;
    contact: string;

}