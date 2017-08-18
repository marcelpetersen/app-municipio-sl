import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { BarcodeScannerComponent } from './barcode-scanner-component/barcode-scanner.component';

@NgModule({
  declarations: [
    BarcodeScannerComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    BarcodeScannerComponent
  ],
  entryComponents:[
  	BarcodeScannerComponent
  ]
})
export class BarcodeScannerModule {}
