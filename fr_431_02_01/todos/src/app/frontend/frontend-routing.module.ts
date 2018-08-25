import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { EditGuard } from './edit.guard';

const routes: Routes= [
  {
    path: 'edit/:id',
    component:TodoFormComponent,
    outlet: 'editOutlet',
    canActivate: [EditGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    
  ],
  exports:[RouterModule],
  declarations: []
})
export class FrontendRoutingModule { }
