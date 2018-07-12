import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Customer';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {

  // input: parametre d'entree 
  // l'obervateur de changement de l'object custmer qui se trouve dans component
  @Input()
  customerObserver: Observable<Customer>;
  // element recu par changement
  currentCustomer: Customer;
  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.customerObserver.subscribe((o)=>{
      console.log(`object recu: ${o.firstName} | ${o.name}`);
      this.currentCustomer = o;
      // faire la detection de changement pour mettre a jour le dom 
      // le markforcheck met uniquement a jour la branche courante de l'abre dom
      this.cd.markForCheck();
    })
  }




}
