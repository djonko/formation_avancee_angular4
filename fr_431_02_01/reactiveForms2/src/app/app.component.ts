import { Component, OnInit } from '@angular/core';
// un FormBuilder est un service qui s'ocuppe de la creation du formgroup
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { fbind } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  

  title = 'app';
  customer: Customer;
  customerNameCtrl: FormControl;
  customerFirstNameCtrl: FormControl;
  

  // un formGroup contient plusieurs formControl.
  customerFormGrp: FormGroup;


  constructor( private fb: FormBuilder)
  {


  }


  ngOnInit(): void {

    //1- initialisation  des variable
    this.customer = new Customer("DURAN","Robert");
    this.customerNameCtrl = new FormControl();
    this.customerFirstNameCtrl = new FormControl();

    
  
    //3- ajoute des formCtrl dans le formGroup
    this.customerFormGrp = this.fb.group({
      name: [this.customer.name, Validators.required],
      firstName: [this.customer.firstName],
      isNew: "true",
      address: this.fb.group({
        street: '',
        city: ''
      })
    });
   

    //4- aller dans le template du component pour binder le formGroup et formCtrl au fomulaire html
  }

  changeProps(): void{

    // changement de proprites 
    this.customer.firstName = "Eric";
    this.customer.name = "VERSAILLE";
    // et mise a jour des formsCtrl
    this.customerNameCtrl.setValue(this.customer.name);
    this.customerFirstNameCtrl.setValue(this.customer.firstName);

    console.log("Log this");
  }

}


class Customer{

  constructor(public name: string, public firstName:string){

  }


}