import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class RecursionService {
  yy: number;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) {}
  getRecursion(x: number, sum: number = 2 / Math.PI, n: number = 1) {
    let min = 1e-10,
      mem = Math.cos(2 * n * x) / ((2 * n - 1) * (2 * n + 1)),
      mul = -4 / Math.PI;
    sum = sum + mul * mem;
    n++;
    if (mem > min || mem < -min) {
      this.getRecursion(x, sum, n);
    } else {
      this.yy = sum;
    }
  }
  getTab(
    xn: number = -3.14,
    xk: number = 3.14,
    h: number = 0.1
  ): Map<number, number> {
    let x = xn,
      y = 0.0;
    while (x <= xk) {
      this.getRecursion(x);
      this.xy.set(x, this.yy);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }
      x = x + h;
    }
    return this.xy;
  }
}
