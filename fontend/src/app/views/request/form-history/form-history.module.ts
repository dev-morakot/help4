import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHistoryComponent } from './form-history.component';
import { FormHistoryRoutingModule } from './form-history-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormHistoryRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [FormHistoryComponent]
})
export class FormHistoryModule {}