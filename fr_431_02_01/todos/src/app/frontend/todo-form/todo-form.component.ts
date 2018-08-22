import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;

  todo: Todo;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe((p)=>{
      let id = p.id;
      this.initTodo(id)
    });
  }

  private initTodo(id: string){
    this.todoService.getTodo(id).subscribe( data => {
      this.todo = data;
      console.log(this.todo);
      this.todoForm.setValue(
        {
          "id":this.todo.id,
          'action': this.todo.action,
          'dueDate': this.todo.dueDate
        }
      );
      
    });
  }



  createForm(){
    this.todoForm = this.fb.group({
      id:['',Validators.required],
      action: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  onSubmit(){
    this.todoService.saveTodo(this.todoForm.value).subscribe( r=>{
      this.todoService.getTodos();

      // clean form after submited
      this.router.navigate([
        {
          outlets: {editOutlet: null}
        }
      ]);
    });
  }
}
