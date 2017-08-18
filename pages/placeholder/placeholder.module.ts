import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { PlaceholderComponent } from './placeholder-component/placeholder.component';

@NgModule({
  declarations: [
    PlaceholderComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    PlaceholderComponent
  ],
  entryComponents:[
  	PlaceholderComponent
  ]
})
export class PlaceholderModule {}
