import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController } from 'ionic-angular';

import { FeedsComponent } from '../feeds/feeds.component';
import { FeedService } from '../shared/services/feed.service';

@Component({
	templateUrl: './feed-category.html',
	providers: [ FeedService ]
})
export class FeedCategoryComponent {
	category: any;

	constructor(
		private feedService: FeedService,
		private navParams: NavParams,
		private navController: NavController,
		private loadingController: LoadingController) {
		this.category = navParams.get('category');
		if (!this.category) {
			this.getCategory();
		}
	}

	getCategory() {
		let loader = this.loadingController.create({
			content: "Please wait"
		});

		loader.present();
		this.feedService.getCategory()
		.subscribe(result => {
			this.category = result;
			loader.dismiss();
		});
	}

	loadFeeds(feedUrl) {
		this.navController.push(FeedsComponent, {
			feedUrl: feedUrl
		});
	}

}
