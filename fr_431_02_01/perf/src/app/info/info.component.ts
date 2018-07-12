import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {

  @Input()
  customer : Customer;
  constructor() { }

  ngOnInit() {
  }

}
