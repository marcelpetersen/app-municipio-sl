import { Component } from '@angular/core';

import { HomeComponent } from '../../home/home-component/home.component';
import { IntendenteComponent } from '../../intendente/intendente-component/intendente.component';
import { ContactComponent } from '../../contact/contact-component/contact.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeComponent;
  tab2Root: any = IntendenteComponent;
  tab3Root: any = ContactComponent;

  constructor() {

  }
}
