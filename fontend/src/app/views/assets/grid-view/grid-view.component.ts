import { Component, OnInit, ViewChild, ElementRef,TemplateRef  } from '@angular/core';
import { HttpClient,HttpResponse, HttpHeaders, HttpRequest  } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators, FormsModule, FormBuilder, Form, NgForm  } from '@angular/forms';

import * as _ from 'underscore';
import { PagerService, AssetsService, GroupsService, LocationService, EquipmentService } from '../../../services/index';
import { dateFormatPipe } from '../../../pipe/date-format-pipe';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
    selector: 'app-grid-view',
    templateUrl: './grid-view.component.html',
    styleUrls: [
      './grid-view.component.scss',
      '../../../../assets/icon/icofont/css/icofont.scss'
    ],
    providers: [dateFormatPipe,BsModalService,AssetsService]
  })
  export class GridViewComponent implements OnInit {

    private allItems: Array<any>;
    private group: Array<any>;
    private locs: Array<any>;
    private equip: Array<any>;
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    modalRef: BsModalRef;
    model: any;
    cofnig = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
    };


    constructor(
        private http: HttpClient,
        private pagerService: PagerService,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private assetsService: AssetsService,
        private groupService: GroupsService,
        private locationService: LocationService,
        private equipService: EquipmentService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.onLoad();
        this.onSelect();
        this.allItems = [];
       
    }

    onSelect() {
        this.groupService.getAll().subscribe(data=> {
            this.group = data;
        }, err => {
            console.log(err);
        });
        this.locationService.getAll().subscribe(data=> {
            this.locs = data;
        }, err=> {
            console.log(err);
        });
        this.equipService.getAll().subscribe(data=>{
            this.equip = data;
        }, err=> {
            console.log(err);
        });
    }

    onLoad() {
        this.assetsService.getAll()
            .subscribe(data=> {
                this.allItems = data;
                this.setPage(1);
            });
    }

    setPage(page: number) {
        if(page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex , this.pager.endIndex + 1);
    }

    deil(_id) {
        this.assetsService.delete(_id)
            .subscribe(data => {
                this.onLoad();
            });
    }

    openModal(template: TemplateRef<any>, line) {
        this.modalRef = this.modalService.show(
            template,Object.assign({}, this.cofnig, {class: 'gray modal-lg'})
        );
        this.model = line;
        console.log("openMOdal", this.model);
    }

    onSubmit() {
        this.assetsService.update(this.model)
            .subscribe(data => {
                this.modalRef.hide();
                this.onLoad();
            });
    }
  }