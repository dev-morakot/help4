import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest , HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { appConfig } from '../app.config';
import { ResLocations } from '../models/res_location';

@Injectable()
export class LocationService {
    location: ResLocations[];
    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get<ResLocations[]>(appConfig.apiUrl + '/api/location/show')
            .map(res=> {
                return res;
            });
    }

    create(value: any) {
        let data = {name: value.name};
        return this.http.post<ResLocations[]>(appConfig.apiUrl + '/api/location/insert', data)
            .map(res=> {
                return res;
            });
    }

    update(location: ResLocations) {
        
        return this.http.put<ResLocations[]>(appConfig.apiUrl + '/api/location/update/' + location._id , location)
            .map(res=>{
                return res;
            });
    }

    delete(_id) {
        return this.http.delete<any>(appConfig.apiUrl + '/api/location/delete/' + _id)
            .map(res=> {
                return res;
            });
    }
}