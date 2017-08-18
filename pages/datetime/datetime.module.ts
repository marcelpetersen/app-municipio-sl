import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { DatetimeComponent } from './datetime-component/datetime.component';

@NgModule({
  declarations: [
    DatetimeComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    DatetimeComponent
  ],
  entryComponents:[
  	DatetimeComponent
  ]
})
export class DatetimeModule {}
