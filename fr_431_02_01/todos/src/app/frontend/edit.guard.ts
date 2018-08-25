import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../backend/user.class';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
      let u =JSON.parse( localStorage.getItem("currentUser") ) as User;
      
      let r:boolean = false;

      if(u != null && u.userName=='admin'  ){
        r= true;
      }
      return r;
    }
}
