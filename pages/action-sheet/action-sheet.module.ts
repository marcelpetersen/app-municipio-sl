import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { ActionSheetComponent } from './action-sheet-component/action-sheet.component';

@NgModule({
  declarations: [
    ActionSheetComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    ActionSheetComponent
  ],
  entryComponents:[
  	ActionSheetComponent
  ]
})
export class ActionSheetModule {}
