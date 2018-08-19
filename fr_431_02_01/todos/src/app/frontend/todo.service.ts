import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './todo';
import { TodoConfig } from './todo-config';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url:string ;
  sTodos:Subject<Todo[]> = new Subject<Todo[]>();

  // $ est une convention qui permet de definir la variable comme un OBservable
  // sur lequel on peut s'abonner
  sTodos$ = this.sTodos.asObservable();

  constructor(private http: Http) 
  {
    this.url = TodoConfig.getUrl();
  }

  getTodos(): Observable<Todo[]>{
     this.http.get(this.url).subscribe(
       (r)=>{
         let data = r.json();
         //console.log(data);
         this.sTodos.next(data);
       }
     );
     return this.sTodos$.map(data=> <Todo[]>data);
  
  }


  getTodo(id:string): Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveTodo(todo: Todo): Observable<any>{
      return this.http.post(this.url, todo);
  }

  deleteTodo(todo: Todo): Observable<any>{
    
    return this.http.delete(this.url+'/'+todo.id);
  }


}
