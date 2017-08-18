import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { RangesComponent } from './ranges-component/ranges.component';

@NgModule({
  declarations: [
    RangesComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    RangesComponent
  ],
  entryComponents:[
  	RangesComponent
  ]
})
export class RangesModule {}
