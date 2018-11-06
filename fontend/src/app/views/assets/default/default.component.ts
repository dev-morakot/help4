import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormGroup, FormArray, Validators, FormsModule, FormBuilder, Form, NgForm  } from '@angular/forms';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { CustomValidators } from 'ng2-validation';

import { dateFormatPipe } from '../../../pipe/date-format-pipe';
import { AssetsService, GroupsService, LocationService , EquipmentService } from '../../../services/index';


@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: [
      './default.component.scss',
      '../../../../assets/icon/icofont/css/icofont.scss'
    ],
    providers: [dateFormatPipe]
})
export class DefaultComponent implements OnInit {

    private groups: Array<any>;
    private locations: Array<any>;
    private equip: Array<any>;
    loading: boolean = false;
    model: any;
    form: FormGroup;
   
    constructor(private http: HttpClient,
        private formBuilder: FormBuilder,
        private myPipe: dateFormatPipe,
        private router: Router,
        public parserFormatter: NgbDateParserFormatter,
        private groupService: GroupsService,
        private locationService: LocationService,
        private equipService: EquipmentService,
        private assetService: AssetsService) {}

    ngOnInit(): void {
        
        this.onLoad();
        this.form = this.formBuilder.group({
            service_tag: [null, Validators.required],
            mac_address: new FormControl(''),
            device_name: [null, Validators.required],
            company: [null, Validators.required],
            note: new FormControl(''),
            groups: new FormControl(''),
            locations: new FormControl(''),
            device_type: new FormControl(''),
            state: new FormControl(true)
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

   onLoad() {
        this.groupService.getAll().subscribe(res=> {
            this.groups = res;
        }, err=> {
            console.log(err);
        });

        this.locationService.getAll().subscribe(res=> {
            this.locations = res;
        }, err=> {
            console.log(err);
        });

        this.equipService.getAll().subscribe(res=> {
            this.equip = res;
        }, err=> {
            console.log(err);
        });
   }

   onSubmit() {
    console.log("form", this.form.value);
    this.loading = true;
    setTimeout(() => {

        this.assetService.create(this.form.value)
            .subscribe(data => {
                this.router.navigate(['/assets/grid-view']);
            }, err=> {
                console.log(err);
            })
        this.loading = false;
    }, 2000);
   }

 

   reset(){
    this.form.reset();
    }
}