import { Component } from '@angular/core';
import { Customer } from './Customer';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  customer: Customer;
  subjetBehavior: BehaviorSubject<Customer>;

  constructor(){
    this.customer = new Customer("DURANT","paul");
    this.subjetBehavior = new BehaviorSubject<Customer>(this.customer);
  }

  changeCustomerProps(){
    this.customer.name = "DUPOND";
    this.customer.firstName = "jean";

    // l'observer ou l'object auquel est attacher un observeur
    // instruction de signaler un changement
    this.subjetBehavior.next(this.customer);
  }

  changeCustomerObj(){

  }
}
