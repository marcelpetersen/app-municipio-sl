import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { GoogleMapsComponent } from './google-maps-component/google-maps.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    GoogleMapsComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9aj3-17cojks6gicZZ_PY2t5ERVu25ac'
    })
  ],
  exports: [
    GoogleMapsComponent
  ],
  entryComponents:[
  	GoogleMapsComponent
  ]
})
export class GoogleMapsModule {}
