import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';
import { SharedModule } from '../../../shared/shared.module';
import { GridViewRoutingModule } from './grid-view-routing.module';

import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatSelectModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {UiSwitchModule} from 'ng2-ui-switch';
import {TagInputModule} from 'ngx-chips';

@NgModule({
    imports: [
        CommonModule,
        GridViewRoutingModule,
        SharedModule,
        FormsModule,
        ModalModule.forRoot(),
        MatInputModule,
        MatButtonModule,
        TagInputModule,
        UiSwitchModule,
        MatDialogModule,MatSelectModule,MatMenuModule,MatIconModule
    ],
    declarations: [GridViewComponent]
})
export class GridViewModule {}