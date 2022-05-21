import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  a: number;
  b: number;
  d: number;
   /*На заданому
проміжку чисел [a,b]
знайдіть кількість
чисел, які при діленні
на 5 дають в остачі 4,
а при діленні на 6
дають в остачі 5.*/


  dob(a: string, b: string) {
    this.a = parseInt(a);
    this.b = parseInt(b);
    let result = 0;
    for (
      let i = this.a;
      i <= this.b;
      i++
    ) {
      if((i%5)==4 && (i%6)==5){
          console.log(i);
      
      result++;}
    }
    this.d = result;
  }
}
