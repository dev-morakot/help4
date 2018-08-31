import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest , HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { ResProblems } from '../models/res_problems';
import { ResSystems } from '../models/res_systems';
import { appConfig } from '../app.config';

@Injectable()
export class SystemService {

    selectedResProblems: ResProblems;
    problem: ResProblems[];

    selectedResSystems: ResSystems;
    systems: ResSystems[];


    readonly URL_API = appConfig.apiUrl;

    constructor(private http: HttpClient){
        this.selectedResProblems = new ResProblems();
        this.selectedResSystems = new ResSystems();
    }

    // system_problem
    postProblem(items: string, date: string, subject: string, edit: string,description: string, currenetUser: string) {
        var data = {
            items: items,
            date: date,
            subject: subject,
            edit: edit,
            description: description,
            currenetUser: currenetUser
        };
        return this.http.post<any>(this.URL_API + '/api/system/insert', data)
            .map( res => {
                return res;
            });
    }

    findAll() {
        return this.http.get<any>(this.URL_API + '/api/system/findall')
        .map( res => {
            return res;
        });
    }


    updateSystem(problems: ResProblems) {
        return this.http.put(this.URL_API + '/api/system/update/' + problems._id, problems);
    }
    deleteProblem(_id: ResProblems) {
        return this.http.delete(this.URL_API + '/api/system/dellistdata/' + _id);
    }   


  
    // res_system
    add(systems: ResSystems) {
       
        return this.http.post<any>(this.URL_API + "/api/system/add", systems)
            .map(( response: Response) => <any>response)
                .catch(this.handleError);
    }
    Delete(_id: ResSystems) {
        return this.http.delete<any>(this.URL_API + "/api/system/delete/" + _id)
            .map( res => {
                return res;
            });
    }

    edit(systems: ResSystems) {
        
        return this.http.put<any>(this.URL_API + '/api/system/edit/' + systems._id, systems)
            .map((response: Response) => <any>response)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server Error');
    }
}