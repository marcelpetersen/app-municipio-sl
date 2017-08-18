import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { FacebookConnectComponent } from './facebook-connect-component/facebook-connect.component';

@NgModule({
  declarations: [
    FacebookConnectComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    FacebookConnectComponent
  ],
  entryComponents:[
  	FacebookConnectComponent
  ]
})
export class FacebookConnectModule {}
