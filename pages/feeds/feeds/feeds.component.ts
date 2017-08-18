import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { NavParams, NavController, LoadingController } from 'ionic-angular';

import { FeedComponent } from '../feed/feed.component';
import { FeedService } from '../shared/services/feed.service';

@Component({
	templateUrl: './feeds.html',
	providers: [ FeedService ]
})
export class FeedsComponent implements OnInit {

	feedUrl: any;
	feeds: any;
	title: string;
	description: string;
	link: string;
	image: string;

	constructor(
		private feedService: FeedService,
		private navParams: NavParams,
		private navController: NavController,
		private loadingController: LoadingController) {
		this.feedUrl = navParams.get('feedUrl');
	}

	ngOnInit() {
		this.getFeeds();
	}

	getFeeds() {
		let loader = this.loadingController.create({
			content: "Please wait"
		});

		loader.present();
		this.feedService.getFeeds(this.feedUrl)
		.subscribe(result => {
            this.title = result.query.results.rss.channel.title;
            this.description = result.query.results.rss.channel.description;
            this.link = result.query.results.rss.channel.link;
            if (result.query.results.rss.channel.image) {
            	this.image = result.query.results.rss.channel.image.url;
            }
			this.feeds = result.query.results.rss.channel.item;
			loader.dismiss();
		});
	}

	loadFeed(feed) {
		this.navController.push(FeedComponent, {
			feed: feed
		});
	}

}
