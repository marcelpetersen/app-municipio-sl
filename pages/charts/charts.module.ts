import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { ChartsComponent } from './charts-component/charts.component';

@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    ChartsComponent
  ],
  entryComponents:[
  	ChartsComponent
  ]
})
export class ChartsModule {}
