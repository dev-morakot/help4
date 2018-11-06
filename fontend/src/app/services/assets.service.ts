import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { appConfig } from '../app.config';
import { Assets } from '../models/res_assets';

@Injectable()
export class AssetsService {

    selectedAssets: Assets;
    assets: Assets[];

    constructor(private http: HttpClient) {
        this.selectedAssets = new Assets();
    }

    getAll() {
        return this.http.get<Assets[]>(appConfig.apiUrl + '/api/assets/all')
            .map(res => {
                return res;
            });
    }

    create(assets: Assets){
        return this.http.post<Assets[]>(appConfig.apiUrl + '/api/assets/insert', assets)
            .map(res=> {
                return res;
            });

    }

    update(assets: Assets) {
        return this.http.put<Assets[]>(appConfig.apiUrl + '/api/assets/update/' + assets._id, assets)
            .map(res=> {
                return res;
            });
    }

    delete(_id: Assets) {
        return this.http.delete<any>(appConfig.apiUrl + '/api/assets/delete/' + _id)
            .map(res=> {
                return res;
            });
    }
}