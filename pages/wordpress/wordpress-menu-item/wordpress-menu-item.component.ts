import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { WordpressPosts } from '../wordpress-posts/wordpress-posts.component';
import { WordpressPost } from '../wordpress-post/wordpress-post.component';
import { WordpressPage } from '../wordpress-page/wordpress-page.component';

@Component({
	templateUrl: './wordpress-menu-item.html'
})
export class WordpressMenuItem {
	title: string;
	menu: any;

	constructor(
		private navParams: NavParams,
		private navController: NavController,
		private loadingController: LoadingController,
		private events: Events,
		private iab: InAppBrowser) {}

	ngOnInit() {
		this.title = this.navParams.get('title');
		this.menu = this.navParams.get('item');
	}

	loadMenuItem(item) {
		if (item.children) {
			this.navController.push(WordpressMenuItem, {
				title: item.title,
				item: item.children
			});
		} else {
			this.previewMenuItem(item)
		}
	}

	previewMenuItem(item) {
		let menuObject;
		// InApp Support Types: post, page, category
		if(item.object === 'category') {
			let category: any;
			category = {};
			category.id = item.object_id;
			category.name = item.title;
			menuObject = {
				"component": WordpressPosts,
				"params": {
					"category": category
				}
			};
		} else if(item.object === 'post_tag') {
			let tag: any;
			tag = {};
			tag.id = item.object_id;
			tag.name = item.title;
			menuObject = {
				"component": WordpressPosts,
				"params": {
					tag: tag
				}
			};
		} else if(item.object === 'post') {
			menuObject = {
				"component": WordpressPost,
				"params": {
					"id": item.object_id
				}
			};
		} else if(item.object === 'page') {
			menuObject = {
				"component": WordpressPage,
				"params": {
					"id": item.object_id
				}
			};
		} else {
			const browser = this.iab.create(item.url, '_blank');
			browser.show();
		}
		this.events.publish('navigationEvent', menuObject);
	}

}
