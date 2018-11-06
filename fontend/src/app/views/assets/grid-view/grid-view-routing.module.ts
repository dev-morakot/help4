import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './grid-view.component';

const routes: Routes = [
    {
        path: '',
        component: GridViewComponent,
        data: {
            title: 'รายการลงทะเบียนอุปกรณ์',
            icon: 'icon-layers',
            caption: 'รายการทะเบียนอุปกรณ์ต่างๆ',
            status: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GridViewRoutingModule {}