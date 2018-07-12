import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app work!';

  customer = new Customer("DURANT",'Robert');

  changeCustomerProps(){
    this.customer.name="DUPOND";
    this.customer.firstName = "Jean";
  }

  changeCustomerObj(){
    this.customer = new Customer("ERIC_"+this.getRandomInt(1,50),'clapton');
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
