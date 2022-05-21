import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  @ViewChild('graphTab') private graphTab: ElementRef;
  @ViewChild('graphSeries') private graphSeries: ElementRef;
  @ViewChild('graphRecursion') private graphRecursion: ElementRef;

  lineChartTab: any;
  lineChartSeries: any;
  lineChartRecursion: any;

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  x = new Array();
  yTab = new Array();
  ySeries = new Array();
  yRecursion = new Array();
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) {
    Chart.register(...registerables);
  }
  ngOnInit() {}
  ras(xn: string, xk: string, h: string) {
    let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
    console.log('Табулювання');
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    console.log('Ряд');
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    console.log('Рекурсія');
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
    this.input();
    this.lineChartMethod();
  }
  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = 0;
      y = value;
      this.yTab.push(y.toFixed(2));
      s = y.toFixed(4) + ' ';
      y = this.xySeries.get(key);
      this.ySeries.push(y.toFixed(2));
      s = s + y.toFixed(4) + ' ';
      y = this.xyRecursion.get(key);
      this.yRecursion.push(y.toFixed(2));
      s = s + y.toFixed(4);
      let x = key;
      this.x.push(x.toFixed(2));
      this.xyInput.set(x.toFixed(2), s);
    });
  }
  lineChartMethod() {
    if (this.lineChartTab instanceof Chart) {
      this.lineChartTab.destroy();
      this.lineChartSeries.destroy();
      this.lineChartRecursion.destroy();
    }

    this.lineChartTab = new Chart(this.graphTab.nativeElement, {
      type: 'line',
      data: {
        labels: this.x,
        datasets: [
          {
            label: 'Графік Tab',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yTab,
            spanGaps: false,
          },
        ],
      },
    });

    this.lineChartSeries = new Chart(this.graphSeries.nativeElement, {
      type: 'line',
      data: {
        labels: this.x,
        datasets: [
          {
            label: 'Графік Series',
            fill: false,
            borderColor: 'rgba(161,25,25,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.ySeries,
            spanGaps: false,
          },
        ],
      },
    });

    this.lineChartRecursion = new Chart(this.graphRecursion.nativeElement, {
      type: 'line',
      data: {
        labels: this.x,
        datasets: [
          {
            label: 'Графік Resolution',
            fill: false,
            borderColor: 'rgba(18,196,18,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yRecursion,
            spanGaps: false,
          },
        ],
      },
    });
  }
}
