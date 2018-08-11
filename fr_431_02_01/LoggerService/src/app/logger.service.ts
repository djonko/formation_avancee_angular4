import { Injectable } from '@angular/core';

/*
Un service est soit declarable : 
  - soit dans un composant, avec utilisation limite que pour le composant 
  - soit dans le module : le service sera disponible dans tous les composants
*/

@Injectable()
export class LoggerService {


  private logs:string[] = [];

  

  logInfo(msg: string){
    this.log(msg);
  }

  logDebug(msg: string){
    this.log(msg);
  }


  logError(msg: string){
    this.log(msg);
  }

  private log(msg: string):void{
    this.logs.push(msg)
    console.log(msg);
  }
}
