import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { PagerService, RequestService } from '../../../services/index';

import * as _ from 'underscore';

@Component({
    selector: 'app-form-history',
    templateUrl: './form-history.component.html',
    styleUrls: [
        './form-history.component.scss',
        '../../../../assets/icon/icofont/css/icofont.scss',
        '../../../../assets/charts/radial/css/radial.scss'
      ],
})
export class FormHistoryComponent implements OnInit {

    private allItems: Array<any>;

    //pager object
    pager: any = {};
    //paged items
    pagedItems: any[];

    constructor(
        private http: HttpClient,
        private router: Router,
        private pagerService: PagerService,
        private requestService: RequestService
    ) {}

    ngOnInit(){

    }
}