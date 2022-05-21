import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;

  lineChart: any;

  xn: number;
  xk: number;
  h: number;
  a: number;
  xx: string[];
  yy: number[];
  data1: string[];

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {}

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          },
        ],
      },
    });
  }

  graphras(xn: string, xk: string, a: string, h: string) {
    this.data1 = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number,
      y: number,
      i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.xk) {
      if (x <= 0) {
        y = (Math.exp(x)*Math.log(x))/(Math.pow(((Math.cos(Math.pow(3*x-1,2)))/(Math.sin(Math.pow(3*x-1,2)))),2));
      } else if (x <= this.a) {
        y = (5/(Math.tan(2*x+3)+1));
      } else {
        y = (Math.pow((3*x-1),2)/(Math.pow(x, 5) + Math.sin(Math.pow(x+2,3))));
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));
      let s = 'x= ' + x.toFixed(1) + ' y=' + y.toFixed(1);
      this.data1.push(s);
      x = x + this.h;
    }
    this.lineChartMethod();
  }
}
