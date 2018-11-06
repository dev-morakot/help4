import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatSelectModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        FormsModule,
        ModalModule.forRoot(),
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,MatSelectModule,MatMenuModule,MatIconModule
    ],
    declarations: [UsersComponent]
})
export class UsersModule {}