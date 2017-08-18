import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeComponent } from '../../home/home-component/home.component';

@Component({
  templateUrl: 'slides.html'
})
export class SlidesComponent {
  constructor(public nav: NavController) {}

  slides = [
    {
      title: "Bienvenido a Sanjua",
      description: "La primera app informativa de nuestra querida provincia.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Que es Sanjua?",
      description: "Una aplicacion informativa y social",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Que puedo hacer en la app ?",
      description: "Leer, participar, comprar.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  openPage() {
    this.nav.setRoot(HomeComponent);
  }
}
