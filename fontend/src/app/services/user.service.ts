import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { appConfig } from '../app.config';
import { Users } from '../models/res_users';

@Injectable()
export class UserService {

    users: Users[];
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Users[]>(appConfig.apiUrl + '/api/res_users/index');
    }

    findById(email: Users) {
        return this.http.post<Users[]>(appConfig.apiUrl + '/api/res_users/find_by_id', email)
            .map(res=> {
                return res;
            });
    }


    create(users: Users) {
        return this.http.post<Users[]>(appConfig.apiUrl + '/api/res_users/form', users);
    }

    update(users: Users) {
        return this.http.put<Users[]>(appConfig.apiUrl + '/api/res_users/update/' + users._id, users);
    }

    delete(_id: Users) {
        return this.http.delete<any>(appConfig.apiUrl + '/api/res_users/delete/' + _id);
    }
    
}