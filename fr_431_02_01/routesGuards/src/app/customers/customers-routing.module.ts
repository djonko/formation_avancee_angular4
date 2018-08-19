import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersMainComponent } from './customers-main/customers-main.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';

const customerRoutes: Routes=[
  {
    path:"customers", 
    component: CustomersMainComponent,
    children:[
      {
        path: 'list', 
        component: CustomersListComponent,
        children: 
        [{
          path: ':id',
          component: CustomersDetailComponent
        }]
      }
      /* {
        path: '', 
        component: CustomersDetailComponent
      } */
    ]
  } 
];
@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [RouterModule]
  
})
export class CustomersRoutingModule { }
