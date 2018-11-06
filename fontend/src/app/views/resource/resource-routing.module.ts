import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersModule } from './users/users.module';

const routes: Routes = [
    {
        path: '',
        data: {
            status: false
        },
        children: [
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResourceRoutingModule {}