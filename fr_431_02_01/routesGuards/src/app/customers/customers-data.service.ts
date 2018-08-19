import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Customer{
  constructor(
    public id: number,
    public name: string,
    public firstName: string
  ){}
}
const CUSTOMERS: Customer[] =[
  new Customer(1, 'DURAND','Jean'),
  new Customer(2, 'DUPOND','Jacques'),
  new Customer(3, 'MARTIN','Louis')
];

let CustomerPromise = Promise.resolve(CUSTOMERS);
let obCustomer = of(CUSTOMERS);

@Injectable({
  providedIn: 'root'
})
export class CustomersDataService {

  constructor() { }

  public getCustomers():Promise<Customer[]>{
    return CustomerPromise;
  }

  public getCustomers2():Observable<Customer[]>{
    return obCustomer;
  }
  
}



