import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any[];
  dataUrl = 'https://api.jsonbin.io/b/6288cb31402a5b3802067c6d/1';
  loading: any;

  searchStudents: number;

  constructor(public loadingController: LoadingController) {}

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });

    await this.loading.present();

    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        this.data = json;
        console.log(this.data);
        this.loading.dismiss();
      });
  }

  searchStudent(average: string) {
    this.searchStudents = parseInt(average);
    console.log(this.searchStudents);
  }

  getColor(average: number) {
    return average === this.searchStudents ? 'green' : '';
  }
  ngOnInit() {}
}
