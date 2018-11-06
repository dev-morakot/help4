import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';
import { Request } from '../models/res_request';
import 'rxjs/add/operator/map'


@Injectable()
export class RequestService {

    request: Request[];

    constructor(
        private http: HttpClient
    ){

    }

    getAll() {
        return this.http.get<Request[]>(appConfig.apiUrl + '/api/request/all')
            .map(res => {
                return res;
            });
    }

    create(request: Request) {
        return this.http.post<Request[]>(appConfig.apiUrl + '/api/request/insert', request)
            .map(res=> {
                return res;
            });
    }

    update(request: Request) {
        return this.http.put<Request[]>(appConfig.apiUrl + '/api/request/update/' + request._id, request)
            .map(res=> {
                return res;
            });
    }

    delete(_id: Request) {
        return this.http.delete<any>(appConfig.apiUrl + '/api/request/delete/' + _id)
            .map(res=> {
                return res;
            });
    }
}