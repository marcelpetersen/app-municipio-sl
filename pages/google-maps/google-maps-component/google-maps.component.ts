import { Component } from '@angular/core';

@Component({
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {
  // Google Map zoom level
  zoom: number = 8;
  
  // Google Map center
  latitude: number = 51.673858;
  longitude: number = 7.815982; 
  
  markers = [
	  {
		  latitude: 51.673858,
		  longitude: 7.815982,
		  label: "A",
		  description: "Description A"
	  },
	  {
		  latitude: 51.373858,
		  longitude: 7.215982,
		  label: "B",
		  description: "Description B"
	  },
	  {
		  latitude: 51.723858,
		  longitude: 7.895982,
		  label: "C",
		  description: "Description C"
	  }
  ]

}
