import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  a: number[][] = [];
  n: number;

  constructor() {}
/*Згенерувати матрицю
розміром NxN.
Виокремити за
допомогою кольору
усі непарні додатні
елементи менше за 25. */
  arrayras(n: string) {
    this.n = parseInt(n);
    let i: number = 0,
      j: number = 0;
    this.a = Array(this.n);
    for (i = 0; i < this.n; i++) {
      this.a[i] = Array(this.n);
      for (j = 0; j < this.n; j++) {
        let aa: number = Math.floor(Math.random() * 100);
        this.a[i][j] = aa;
      }
    }
  }

  getColor(b: number) {
    return b > 25 ? 'magenta' : 'pink';
  }

  ngOnInit() {}
}
