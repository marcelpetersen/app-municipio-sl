import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { FeedCategoryComponent } from '../feed-category/feed-category.component';
import { FeedService } from '../shared/services/feed.service';

@Component({
	templateUrl: './feed-categories.html',
	providers: [ FeedService ]
})
export class FeedCategoriesComponent implements OnInit {

	categories: any;

	constructor(
		private feedService: FeedService,
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
		this.feedService.getCategories()
		.subscribe(result => {
			this.categories = result.categories;
			loader.dismiss();
		});
	}

	loadCategory(category) {
		this.navController.push(FeedCategoryComponent, {
			category: category
		});
	}

}
