import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule, Routes } from '@angular/router';
import { CustomersMainComponent } from './customers/customers-main/customers-main.component';
import { CustomersModule } from './customers/customers.module';
import { UsersComponent } from './admin/users/users.component';
import { AdminModule } from './admin/admin.module';

const appRoutes: Routes =[
  {path:"",redirectTo: "/customers", pathMatch:'full'},
  {path:"admin",component: UsersComponent, outlet:"adminOutlet"}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    AdminModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
