import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHistoryComponent } from './form-history.component';

const routes: Routes = [
    {
        path: '',
        component: FormHistoryComponent,
        data: {
            title: 'ประวัติแจ้งซ่อม',
            icon: 'icon-layers',
            caption: 'รายการประวัติที่ได้แจ้งซ่อม',
            status: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormHistoryRoutingModule {}