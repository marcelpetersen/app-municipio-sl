import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { YoutubeService } from '../shared/services/youtube.service';
import { YoutubeChannelVideoComponent } from '../youtube-channel-video/youtube-channel-video.component';

@Component({
	templateUrl: './youtube-channel.html',
	providers: [ YoutubeService ]
})
export class YoutubeChannelComponent implements OnInit {

	videos: any;
	loader: any;

	constructor(
		private navParams: NavParams,
		private youtubeService: YoutubeService,
		private navController: NavController,
		private loadingController: LoadingController) {}

	ngOnInit() {
		this.loader = this.loadingController.create({
			content: "Un momento..."
		});
		this.getChannel();
	}

	getChannel() {
		this.youtubeService.getChannel()
		.subscribe(result => {
			this.videos = result.items;
			this.loader.dismiss();	
		}, error => {
			this.loader.dismiss();
		});
	}

	loadVideo(video) {
		this.navController.push(YoutubeChannelVideoComponent, {
			video: video
		});
	}

}
