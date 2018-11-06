import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { appConfig } from '../app.config';
import { Group } from '../models/res_groups';


@Injectable()
export class GroupsService {

    group: Group[];


    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<Group[]>(appConfig.apiUrl + '/api/groups/show')
            .map(res=> {
                return res;
            });
    }

    create(group: Group) {
       
        return this.http.post<Group[]>(appConfig.apiUrl + '/api/groups/insert', group)
            .map( res => {
                return res;
            });
    }

    update(group: Group) {
        
        return this.http.put<Group[]>(appConfig.apiUrl + '/api/groups/update/' + group._id, group)
            .map( res => {
                return res;
            });
    }

    delete(_id: Group) {
       
        return this.http.delete<any>(appConfig.apiUrl + '/api/0groups/delete/' + _id)
            .map(data => {
                return data;
            });
    }
}