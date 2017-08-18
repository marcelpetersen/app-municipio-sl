import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { GridComponent } from './grid-component/grid.component';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    GridComponent
  ],
  entryComponents:[
  	GridComponent
  ]
})
export class GridModule {}
