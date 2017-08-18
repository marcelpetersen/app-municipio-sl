import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { PageComponent } from './page-component/page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    PageComponent
  ],
  entryComponents:[
  	PageComponent
  ]
})
export class PageModule {}
