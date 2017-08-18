import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { SlidesComponent } from './slides-component/slides.component';

@NgModule({
  declarations: [
    SlidesComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    SlidesComponent
  ],
  entryComponents:[
  	SlidesComponent
  ]
})
export class SlidesModule {}
