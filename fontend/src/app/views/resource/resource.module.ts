import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';

import { ResourceRoutingModule } from './resource-routing.module';
@NgModule({
    imports: [
        CommonModule,
        ResourceRoutingModule,
        SharedModule
    ],
    declarations: []
})
export class ResourceModule {}