import { Component } from '@angular/core';
import { NavParams, LoadingController } from 'ionic-angular';

import { Service } from '../../services/service';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html',
  providers: [ Service ]
})
export class PageComponent {

  title: string;
  image: string;
  body: string;
  list: any;
  
  constructor(
    private Service: Service,
    private navParams: NavParams,
    private loadingController: LoadingController
  ) {
    if (navParams.get('section')) {
			this.getSection(navParams.get('section'));
		}
  }

  getSection(name) {
		let loader = this.loadingController.create({
			content: "Un momento..."
		});

		loader.present();
		this.Service.getPage(name)
		.subscribe(result => {
      this.title = result['title'];
      this.image = result['images'];
      this.body = result['body'];
      this.list = result['list'];
		},
		error => console.log(error),
    () => loader.dismiss());
	}

}
