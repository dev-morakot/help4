import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultModule } from './default/default.module';
import { GridViewModule } from './grid-view/grid-view.module';

const routes: Routes = [
    {
        path: '',
        data: {
            status: false
        },
        children: [
            {
                path: 'default',
                loadChildren: './default/default.module#DefaultModule'
            },
            {
                path: 'grid-view',
                loadChildren: './grid-view/grid-view.module#GridViewModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssetsRoutingModule {}