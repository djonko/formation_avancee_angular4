import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersMainComponent } from './customers-main/customers-main.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [CustomersMainComponent, CustomersDetailComponent, CustomersListComponent]
})
export class CustomersModule { }
