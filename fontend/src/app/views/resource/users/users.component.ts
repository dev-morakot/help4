import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

import * as _ from 'underscore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { FormControl, FormGroup, FormArray, Validators, FormsModule, FormBuilder, Form, NgForm  } from '@angular/forms';

import { UserService, GroupsService } from '../../../services/index';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FilterPipe } from '../../../pipe/filter.pipe';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: [
      './users.component.scss',
      '../../../../assets/icon/icofont/css/icofont.scss'
    ],
    providers: [BsModalService]
})
export class UsersComponent implements OnInit {

    
    private result: Array<any>;
    private states: Array<any>;
    private groups: Array<any>;
    modalRef: BsModalRef;
    myData: any;
    model: any;
    form: FormGroup;
    config = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false
    };
    selectedFile: File;
    query:string = '';

    constructor(private http: HttpClient, private formBuilder: FormBuilder,         
        private userService: UserService, private modalService: BsModalService,
         private groupService: GroupsService) {}

    ngOnInit(): void {
        this.onLoad();
        this.result = [];
        this.form = this.formBuilder.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],            
            password: [null, Validators.required],
            email: [null, Validators.required],
            code: [null, Validators.required],
            active: new FormControl(''),
            state: new FormControl(''),
            company: new FormControl(''),
            group: new FormControl(''),
        });
        this.states = [
            {status: "admin", name: "ผู้ดูแลระบบ"},
            {status: "user", name: "ผู้ใช้งาน"},
        ];
        this.groupService.getAll()
            .subscribe(data=> {
                this.groups = data;
            });
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
    }

    onLoad(){
        this.userService.getAll()
            .subscribe(data=> {
                this.result = data;
            }, err => {
                console.log(err);
            });
    }

    onInsert() {
        const md5 = new Md5();
        console.log(this.form.value);
        this.myData = {
            firstname: this.form.value.firstname,
            lastname: this.form.value.lastname,
            password: md5.appendStr(this.form.value.password).end(),
            email: this.form.value.email,
            code:  this.form.value.code,
            active: this.form.value.active,
            state: this.form.value.state,
            company: this.form.value.company,
            group:  this.form.value.group
        };
        this.userService.create(this.myData)
            .subscribe(data=> {
                this.modalRef.hide();
                this.onLoad();
                this.form = this.formBuilder.group({
                    firstname: [null],
                    lastname: [null],
                    password: [null],
                    email: [null],
                    code: [null],
                    active: [null],
                    state: [null],
                    company: [null],
                    group: [null]
                });
            }, err=> {
                console.log(err);
            });
    }

    del(_id) {
        this.userService.delete(_id)
            .subscribe(data=> {
                this.onLoad();
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

    openModal(users: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
          users, Object.assign({}, this.config, {class: 'gray modal-lg'})
        );
    }

    editModal(editLine: TemplateRef<any>, line) {
        this.modalRef = this.modalService.show(
            editLine, Object.assign({}, this.config, {class: 'gray modal-lg'})
        );
        this.model = line;
        console.log("editmodal", this.model);
    }

    onEdit() {
        console.log(this.model);
        this.userService.update(this.model)
            .subscribe(data => {
                this.modalRef.hide();
                this.onLoad();
            });
    }
}