import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularZone';

  cpt: number;

  constructor(private myZone: NgZone){
    
  }

  incInZone(){
    this.cpt = 0;
    this.incCptInZone();
  }

  incOutZone(){
    this.cpt = 0;
    this.incCptOutZone();
  }

  incCptInZone(){
    this.cpt++;
    console.log(`cpt : ${this.cpt}`);
    if(this.cpt < 100){
      setTimeout(()=>{this.incCptInZone();},100);
    }else{
      this.myZone.run(()=>{
        console.log("end cpt");
      })
    }
  }

  incCptOutZone(){
    this.cpt = 0;
    this.myZone.runOutsideAngular(()=>{
      this.incCptInZone();
    });
  }
  
}
