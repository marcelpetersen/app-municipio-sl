import { Component } from '@angular/core';
import { NavParams, LoadingController } from 'ionic-angular';

import { Service } from '../../services/service';

@Component({
	templateUrl: 'content.html',
	selector: 'page-content',
	providers: [ Service ]
})
export class ContentComponent {

	title: any;
	contents: any;
	section: any;

	constructor(
		private Service: Service,
		private navParams: NavParams,
		private loadingController: LoadingController
		) {
		if (navParams.get('section')) {
			this.getSection(navParams.get('section'));
		}
	}

	getSection(section) {
		let loader = this.loadingController.create({
			content: "Un momento..."
		});

		loader.present();
		this.Service.getContents(section)
		.subscribe(result => {
			if (section == 'activity') {
				section = 'Actividades';
			}
			else if (section == 'article') {
				section = 'Ultimas Noticias';
			}
			else if (section == 'article-culture') {
				section = 'Cultura';
			}
			else if (section == 'article-builds') {
				section = 'Obras';
			}
			else if (section == 'shop') {
				section = 'Zonas Comerciales';
			}
			else if (section == 'event') {
				section = 'Eventos';
			}
			
			this.title = section;
			this.contents = result;
		},
		error => console.log(error),
    () => loader.dismiss());
	}
}
