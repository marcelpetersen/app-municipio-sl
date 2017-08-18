import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  templateUrl: 'barcode-scanner.html'
})
export class BarcodeScannerComponent {

	constructor(
		public navCtrl: NavController,
		private barcodeScanner: BarcodeScanner
		) {}

	scan() {
		this.barcodeScanner.scan().then((barcodeData) => {
		 // Success! Barcode data is here
		}, (err) => {
		    // An error occurred
		});
	}

}
