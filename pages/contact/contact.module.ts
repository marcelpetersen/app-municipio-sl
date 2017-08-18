import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { ContactComponent } from './contact-component/contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    ContactComponent
  ],
  entryComponents:[
  	ContactComponent
  ]
})
export class ContactModule {}
