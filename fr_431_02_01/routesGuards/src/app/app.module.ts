import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes =[
  { 
    path:"",
    loadChildren:"./customers/customers.module#CustomersModule"
  },
  {path:"admin",component: UsersComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  // Un Guard est par defaut un service, dont il faut le traiter comme un service
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
