import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private logService: LogService) {}
  getSeries(x: number) {
    let sum: number = 2 / Math.PI,
      min = 1e-12,
      mem = 1,
      n = 1,
      mul = -4 / Math.PI;
    do {
      mem = Math.cos(2 * n * x) / ((2 * n - 1) * (2 * n + 1));
      sum = sum + mul * mem;
      n++;
    } while (mem > min || mem < -min);
    return sum;
  }
  getTab(
    xn: number = -3.14,
    xk: number = 3.14,
    h: number = 0.1
  ): Map<number, number> {
    let x = xn,
      y = 0.0;
    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }
      x = x + h;
    }
    return this.xy;
  }
}
