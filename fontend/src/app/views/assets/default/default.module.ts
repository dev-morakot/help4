import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';
import { DefaultComponent } from './default.component';

import { DefaultRoutingModule } from './defualt-routing.module';

import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatSelectModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {UiSwitchModule} from 'ng2-ui-switch';
import {TagInputModule} from 'ngx-chips';

@NgModule({
    imports: [
        CommonModule,
        DefaultRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        MatInputModule,
        MatButtonModule,
        TagInputModule,
        UiSwitchModule,
        MatDialogModule,MatSelectModule,MatMenuModule,MatIconModule
    ],
    declarations: [DefaultComponent]
})
export class DefaultModule {}