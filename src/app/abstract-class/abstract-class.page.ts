import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  birds: Bird[]; 
  foodForRaven:number = 0; 
  foodForLelekas:number = 0;


  constructor() {}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  ras(nn: string) {
    this.birds = new Array();
    let n = parseInt(nn);
    for (let i = 0; i <  n; i++) {
      this.birds.push(
        new Raven(
          'Voron Popka',
          this.getRandomInt(1000),
        )
      );
      this.birds.push(
        new Leleka('Leleka Capka', this.getRandomInt(12000))
      );
    } 


    this.birds.forEach((elem) => {
       if(elem instanceof Raven){
         this.foodForRaven += elem.foodPerDay();
       }; 

       if(elem instanceof Leleka){
        this.foodForLelekas += elem.foodPerDay();
      }; 
       
      console.log(elem.show());
    });
    console.log("FOR LELEKAS = "+this.foodForLelekas);
    console.log("FOR VORONA = "+this.foodForRaven);
  }

  getColor(elem: number) {
    return elem > this.foodForLelekas+this.foodForRaven ? 'green' : '';
  }

  ngOnInit() {}
}


abstract class Bird{
  private name: string; 
   

  constructor(name: string){
    this.name = name;
  }

  show():string{
    return (
      'Name: '+this.name +" food: "+this.foodPerDay().toFixed(3)
    );
  }

  abstract foodPerDay():number; 
}

export class Raven extends Bird{
  
  private L:number; 

  constructor(name:string, L:number){
    super(name);
    this.L = L;
  }

  foodPerDay(): number {
     return 0.8*this.L; 
  }
  

} 

class Leleka extends Bird{
  
  private L:number; 

  constructor(name:string, L:number){
    super(name);
    this.L = L;
  }

  foodPerDay(): number {
     return 0.0005*this.L; 
  }
  

} 
 
