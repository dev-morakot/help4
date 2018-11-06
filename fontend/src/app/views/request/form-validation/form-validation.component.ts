import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EquipmentService, UserService, RequestService } from '../../../services/index';

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: [
        './form-validation.component.scss',
        '../../../../assets/icon/icofont/css/icofont.scss',
        '../../../../assets/charts/radial/css/radial.scss'
      ],
})
export class FormValidationComponent implements OnInit {

  equip: Array<any>;
  form: FormGroup;
  myData: any;
  currentUser: any;
  users: Array<any>;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private equipService: EquipmentService,
    private userService: UserService,
    private router: Router,
    private requestService: RequestService
    ) {}
  
  ngOnInit() {

    this.equipService.getAll().subscribe(data=>{
      this.equip = data;
    }, err=> {
      console.log(err);
    });
    this.currentUser =  {email: 'morakot@bicchemical.com'};//localStorage.getItem('currentUser');

    this.userService.findById(this.currentUser).subscribe(data=> {
        this.users = data;
        console.log("user Find By =", data);
      });

    this.form = this.formBuilder.group({
      device_type: new FormControl(''),
      subject: [null, Validators.required],      
      note: new FormControl(''),
      description: [null, Validators.required],

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

  onSubmit() {
    this.loading = true;
   
    setTimeout(() => {
      this.myData = {
        device_type: this.form.value.device_type,
        subject: this.form.value.subject,
        note: this.form.value.note,
        description: this.form.value.description,
        users: this.users,
        state: 'draft',
    };
    console.log("form", this.myData);
      this.requestService.create(this.myData)
      .subscribe(data => {
        this.router.navigate(['/request/history']);
      });
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