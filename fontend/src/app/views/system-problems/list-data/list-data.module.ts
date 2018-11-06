import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDataComponent } from './list-data.component';
import { SharedModule } from '../../../shared/shared.module';
import { ListDataRoutingModule } from './list-data-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatSelectModule, MatMenuModule, MatIconModule, MatNativeDateModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        ListDataRoutingModule,
        SharedModule,
        FormsModule,
        ModalModule.forRoot(),
        MatInputModule,
        MatButtonModule,
        MatDialogModule,MatSelectModule,MatMenuModule,MatIconModule,
        MatDatepickerModule,MatFormFieldModule,MatNativeDateModule
    ],
    declarations: [ListDataComponent]
})
export class ListDataModule {}