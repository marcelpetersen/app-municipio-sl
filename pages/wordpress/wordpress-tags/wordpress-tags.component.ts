import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { WordpressService } from '../shared/services/wordpress.service';
import { WordpressPosts } from '../wordpress-posts/wordpress-posts.component';

@Component({
	templateUrl: './wordpress-tags.html',
	providers: [ WordpressService ]
})
export class WordpressTags implements OnInit {

	tags: any;

	constructor(
		private wordpressService: WordpressService,
		private navController: NavController,
		private loadingController: LoadingController) {}

	ngOnInit() {
		this.getTags();
	}

	getTags() {
		let loader = this.loadingController.create({
			content: "Please wait"
		});
		loader.present();
		
		this.wordpressService.getTags()
		.subscribe(result => {
			this.tags = result;
		},
		error => console.log(error),
    () => loader.dismiss());
	}

	loadTag(tag) {
		this.navController.push(WordpressPosts, {
			tag: tag
		});
	}

}
