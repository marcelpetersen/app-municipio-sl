import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { ContentComponent } from './content-component/content.component';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    ContentComponent
  ],
  entryComponents:[
  	ContentComponent
  ]
})
export class ContentModule {}
