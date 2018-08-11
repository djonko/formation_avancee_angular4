import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
//import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //,providers: [LoggerService]
})
export class AppComponent {
  title = 'app';

  constructor(private logger: LoggerService){
    
  }


  doLog(){
      this.logger.logInfo(" Message log");
  }
}
