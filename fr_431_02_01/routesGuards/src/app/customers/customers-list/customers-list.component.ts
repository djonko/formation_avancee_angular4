import { Component, OnInit } from '@angular/core';
import { CustomersDataService, Customer } from '../customers-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers : Promise<Customer[]>;
  customers2 : Observable<Customer[]>;
  constructor(private service: CustomersDataService, 
    private router : Router,
    private route: ActivatedRoute
  ) {

   }

  ngOnInit() {
    this.customers = this.service.getCustomers();
    this.customers2 = this.service.getCustomers2();
    
  }

  public setOnclickDetail(customer: Customer){

    /** navigation a partir de la route courante c-a-d ActivatedRoute 
     * la fonction prend en paramettre le chemin complet vers la destination
     */
    this.router.navigate([customer.id], {relativeTo:this.route}); 

  }

}
