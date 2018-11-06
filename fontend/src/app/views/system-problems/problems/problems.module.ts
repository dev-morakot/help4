import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemsComponent } from './problems.component';
import {ProblemsRoutingModule} from './problems-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [ProblemsComponent]
})
export class ProblemsModule { }