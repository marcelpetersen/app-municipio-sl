import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { AboutComponent } from './about-component/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    AboutComponent
  ],
  entryComponents:[
  	AboutComponent
  ]
})
export class AboutModule {}
