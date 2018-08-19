import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }



  createForm(){
    this.todoForm = this.fb.group({
      action: [],
      dueDate: []
    });
  }
}
