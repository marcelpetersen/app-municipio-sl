import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { IntendenteComponent } from './intendente-component/intendente.component';

@NgModule({
  declarations: [
    IntendenteComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    IntendenteComponent
  ],
  entryComponents:[
  	IntendenteComponent
  ]
})
export class IntendenteModule {}
