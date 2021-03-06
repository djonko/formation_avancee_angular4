import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FrontendRoutingModule } from './frontend-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FrontendRoutingModule
  ],
  declarations: [MainComponent, TodoListComponent, TodoItemComponent, TodoFormComponent]
})
export class FrontendModule { }
