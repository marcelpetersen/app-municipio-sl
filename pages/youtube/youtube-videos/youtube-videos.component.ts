import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { YoutubeService } from '../shared/services/youtube.service';
import { YoutubeVideoComponent } from '../youtube-video/youtube-video.component';

@Component({
	templateUrl: './youtube-videos.html',
	providers: [ YoutubeService ]
})
export class YoutubeVideosComponent implements OnInit {

	videos: any;
	loader: any;

	constructor(
		private navParams: NavParams,
		private youtubeService: YoutubeService,
		private navController: NavController,
		private loadingController: LoadingController) {}

	ngOnInit() {
		this.loader = this.loadingController.create({
			content: "Please wait"
		});
		this.getPlaylistId();
	}

	getPlaylistId() {
		this.loader.present();
		this.youtubeService.getPlaylistId()
		.subscribe(result => {
			if (result.items.length && result.items[0].contentDetails.relatedPlaylists.uploads) {
				let playlistId = result.items[0].contentDetails.relatedPlaylists.uploads;
				this.getVideos(playlistId);
			} else {
				this.loader.dismiss();
			}
		}, error => {
			this.loader.dismiss();
		});
	}

	getVideos(playlistId) {
		this.youtubeService.getVideos(playlistId)
		.subscribe(result => {
			this.videos = result.items;
			this.loader.dismiss();	
		}, error => {
			this.loader.dismiss();
		});
	}

	loadVideo(video) {
		this.navController.push(YoutubeVideoComponent, {
			video: video
		});
	}

}
