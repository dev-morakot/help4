import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        data: {
            title: 'ฟอร์มกรอกข้อมูล',
            icon: 'icon-layers',
            caption: 'กรอกข้อมูลในฟอร์ม - ตรวจสอบความถูกต้อง',
            status: true
        }
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DefaultRoutingModule {}