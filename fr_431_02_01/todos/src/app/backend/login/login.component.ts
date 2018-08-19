import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string;

  constructor(
    private fb:FormBuilder, 
    private router: Router, 
    private auth: AuthenticationService) { }

  ngOnInit() {
    this.createForm();
    this.message = '';
  }


  onSubmit(){

    let _login = this.loginForm.value.login;
    let _password = this.loginForm.value.password;
    this.auth.login(_login,_password).subscribe(
      (d)=>{
        this.router.navigate(['main']);
      },
      (e)=>{
        this.message ="Error on Authentication";
      }
    )
    
  }

  createForm(){
    this.loginForm = this.fb.group({
      login:['admin',Validators.required],
      password:['12345',Validators.required],
    });
  }

}