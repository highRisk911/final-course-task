import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import { MyHeaderComponent } from '../my-header/my-header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GraphPageRoutingModule],
  declarations: [GraphPage, MyHeaderComponent],
})
export class GraphPageModule {}
