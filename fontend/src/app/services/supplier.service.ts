import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { appConfig } from '../app.config';
import { Supplier } from '../models/res_supplier';

@Injectable()
export class SupplierService {

    supplier: Supplier[];
    constructor(private http: HttpClient){}

    all() {
        return this.http.get<Supplier[]>(appConfig.apiUrl + '/api/supplier/show')
            .map( res => {
                return res;
            });
    }

    create(supplier: Supplier){
        
        return this.http.post<Supplier[]>(appConfig.apiUrl + '/api/supplier/insert', supplier)
            .map(res=>{
                return res;
            });
    }

    update(supplier: Supplier) {
        
        return this.http.put<Supplier[]>(appConfig.apiUrl + '/api/supplier/update/' + supplier._id, supplier)
            .map(res=> {
                return res;
            });
    }

    delete(_id: Supplier) {
        return this.http.delete<any>(appConfig.apiUrl + '/api/supplier/delete/' + _id)
            .map( res=> {
                return res;
            });
    }
}