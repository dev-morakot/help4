import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormValidationModule } from '../request/form-validation/form-validation.module';
import { FormHistoryModule } from '../request/form-history/form-history.module';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'แจ้งรับบริการ',
      status: false
    },
    children: [
      {
        path: 'validation',
        loadChildren: './form-validation/form-validation.module#FormValidationModule'
      },
      {
        path: 'history',
        loadChildren: './form-history/form-history.module#FormHistoryModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
