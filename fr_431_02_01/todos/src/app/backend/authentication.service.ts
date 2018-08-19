import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TodoConfig } from '../frontend/todo-config';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { from } from 'rxjs';

@Injectable()
export class AuthenticationService {

  constructor(private http:Http) {

   }


   login(username:string, password: string): Observable<any>{
      let url:string = TodoConfig.getUrlAdmin()+"?userName="+username+"&password="+password;
      return this.http.get(url).map((response)=>{
          let user:{};
          if(response.json().length> 0){
            user = response.json()[0];
            localStorage.setItem('currentUser',JSON.stringify(user));
          }else{
            throw new Error("Auth error");
            
          }
          return user;
           
      });
   }
}
