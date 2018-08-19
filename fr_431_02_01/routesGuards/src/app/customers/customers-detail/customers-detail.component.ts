import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.css']
})
export class CustomersDetailComponent implements OnInit {

  public id: number;
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(p =>{
      this.id = p.id;
    })
  }

}
