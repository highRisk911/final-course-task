import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}
  a: number;
  b: number;
  c: number;
  d: number;
/*Задано три числа.
Якщо всі вони
непарні, то знайти їх
суму. В іншому
випадку – середнє
арифметичне.*/
  ras(a: string, b: string, c: string) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.c = parseFloat(c);
    if ((this.a%2) && (this.b%2) && (this.c%2))
      this.d = this.a + this.b + this.c;
    else this.d = (this.a + this.b + this.c)/3.0;
  }
}
