import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


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


  ngOnInit(): void {

    //1- initialisation  des variable
    this.customer = new Customer("DURAN","Robert");
    this.customerNameCtrl = new FormControl();
    this.customerFirstNameCtrl = new FormControl();

    //2- set des value des formsCtrl
    this.customerNameCtrl.setValue(this.customer.name);
    this.customerFirstNameCtrl.setValue(this.customer.firstName);
  
    //3- ajoute des formCtrl dans le formGroup
    this.customerFormGrp = new FormGroup({
      name: this.customerNameCtrl,
      firstName: this.customerFirstNameCtrl
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