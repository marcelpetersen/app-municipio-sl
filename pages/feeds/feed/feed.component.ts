import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
	templateUrl: './feed.html'
})
export class FeedComponent {
	feed: any;

	constructor(
		private navParams: NavParams,
		private navController: NavController,
		private iab: InAppBrowser,
		private socialSharing: SocialSharing) {
		this.feed = navParams.get('feed');
	}

	previewFeed() {
		const browser = this.iab.create(this.feed.link, '_blank');
		browser.show();
	}

	shareFeed() {
		let subject = this.feed.title;
		let message = this.feed.description;
		message = message.replace(/(<([^>]+)>)/ig,"");
		let url = this.feed.link;
		this.socialSharing.share(message, subject, '', url);
	}

}
