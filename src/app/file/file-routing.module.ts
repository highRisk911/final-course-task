import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilePage } from './file.page';
import { MyHeaderComponent } from '../my-header/my-header.component';

const routes: Routes = [
  {
    path: '',
    component: FilePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MyHeaderComponent],
})
export class FilePageRoutingModule {}
