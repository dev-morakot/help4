import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators, FormsModule, FormBuilder, Form } from '@angular/forms';
import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../../../app.config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { SystemService } from '../../../services/index';
import { dateFormatPipe } from '../../../pipe/date-format-pipe';


@Component({
    selector: 'app-problems',
    templateUrl: './problems.component.html',
    styleUrls: [
        './problems.component.scss',
        '../../../../assets/icon/icofont/css/icofont.scss',
        '../../../../assets/charts/radial/css/radial.scss'
    ],
    providers: [dateFormatPipe, SystemService]
})
export class ProblemsComponent implements OnInit {

    private selectArr: Array<any>;
    form: FormGroup;
    toggle = false;
    private cur_date: string;
    private currentUser: string;

    loading: boolean = false;
    test;
    constructor(private formBuilder: FormBuilder, 
        private http: HttpClient, 
        private systemService: SystemService,
        private router: Router,
        private myPipe: dateFormatPipe,
        public parserFormatter: NgbDateParserFormatter) {
    }

    ngOnInit(): void{
        this.onLoad();
        this.form = this.formBuilder.group({
            /*items: this.formBuilder.group({
                _id: ['', Validators.required],
               // name: ['', Validators.required]
            }),*/
            items: new FormControl(''),
            date: [null, Validators.required],
            subject: [null, Validators.required],
            description: [null, Validators.required],
            edit: new FormControl('')
           // edit: [null, Validators.required],
            
        });
        console.log("router=>",this.test);
    }

    onLoad(){
        this.http.get<any[]>(appConfig.apiUrl + "/api/system/show")
            .subscribe(res => {
                console.log("รายการที่แจ้ง",res);
                this.selectArr = res;
            }, err => {
                console.log(err);
            });
    }

    isFieldValid(field: string) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    }

    displayFieldCss(field: string) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    }

    onSubmit(): void{
        console.log("form", this.form.value);
        this.loading = true;
       setTimeout(() => {
        this.cur_date = this.form.value.date;//this.myPipe.transform(this.form.value.date);
        this.currentUser = JSON.parse(localStorage.getItem('fullname'));
           // if(this.form.valid) {
                this.systemService.postProblem(this.form.value.items, this.cur_date, this.form.value.subject, this.form.value.edit, this.form.value.description, this.currentUser)
                .subscribe(data => {
                    console.log(data);
                    this.router.navigate(['/system-problems/list-data']);
                }, err => {
                    console.log(err);
                });
            //}
           this.loading = false;
       }, 2000);
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            console.log(field);
            const control = formGroup.get(field);
            if(control instanceof FormControl) {
              control.markAsTouched({onlySelf: true});
            } else if(control instanceof FormGroup) {
              this.validateAllFormFields(control);
            }
          });
    }

    reset(){
        this.form.reset();
    }
}