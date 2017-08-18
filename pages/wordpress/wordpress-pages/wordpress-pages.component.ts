import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { WordpressService } from '../shared/services/wordpress.service';
import { WordpressPage } from '../wordpress-page/wordpress-page.component';

@Component({
	templateUrl: './wordpress-pages.html',
	providers: [ WordpressService ]
})
export class WordpressPages implements OnInit {

	pages: any;

	constructor(
		private wordpressService: WordpressService,
		private navController: NavController,
		private loadingController: LoadingController) {}

	ngOnInit() {
		this.getPages();
	}

	getPages() {
		let loader = this.loadingController.create({
			content: "Please wait"
		});

		loader.present();
		this.wordpressService.getPages()
		.subscribe(result => {
			this.pages = result;
		},
		error => console.log(error),
    () => loader.dismiss());
	}

	loadPage(page) {
		this.navController.push(WordpressPage, {
			page: page
		});
	}
}
