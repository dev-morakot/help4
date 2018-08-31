import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest , HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { appConfig } from '../app.config';
import { Equipment } from '../models/res_equipment';

@Injectable()
export class EquipmentService {

    selectedEquipment: Equipment;
    equipment: Equipment[];

    constructor(private http: HttpClient){
        this.selectedEquipment = new Equipment();
    }

    getAll() {
        return this.http.get<Equipment[]>(appConfig.apiUrl + '/api/equipment/all')
            .map(res=> {
                return res;
            });
    }

    create(equipment: Equipment) {
        
        return this.http.post<Equipment[]>(appConfig.apiUrl + '/api/equipment/insert', equipment)
            .map( res => {
                return res;
            });

    }

    update(equipment: Equipment) {
        
        return this.http.put<Equipment[]>(appConfig.apiUrl + '/api/equipment/update/' + equipment._id, equipment)
            .map(res=> {
                return res;
            });
    }

    delete(_id: Equipment) {
        return this.http.delete<any>(appConfig.apiUrl + '/api/equipment/delete/' + _id)
            .map(res=> {
                return res;
            });
    }
}