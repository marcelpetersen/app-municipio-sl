import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { WordpressService } from '../shared/services/wordpress.service';
import { WordpressPosts } from '../wordpress-posts/wordpress-posts.component';

@Component({
	templateUrl: './wordpress-categories.html',
	providers: [ WordpressService ]
})
export class WordpressCategories implements OnInit {

	categories: any;

	constructor(
		private wordpressService: WordpressService,
		private navController: NavController,
		private loadingController: LoadingController) {}

	ngOnInit() {
		this.getCategories();
	}

	getCategories() {
		let loader = this.loadingController.create({
			content: "Please wait"
		});
		loader.present();
		
		this.wordpressService.getCategories()
		.subscribe(result => {
			this.categories = result;
		},
		error => console.log(error),
    () => loader.dismiss());
	}

	loadCategory(category) {
		this.navController.push(WordpressPosts, {
			category: category
		});
	}

}
