import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: {
            title: 'ผู้ใช้งาน',
            icon: 'icon-layers',
            caption: 'ตั้งค่าข้อมูลผู้ใช้',
            status: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}