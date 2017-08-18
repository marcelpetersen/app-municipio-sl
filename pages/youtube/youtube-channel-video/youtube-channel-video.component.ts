import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
	templateUrl: './youtube-channel-video.html'
})
export class YoutubeChannelVideoComponent {
	video: any;
	videoUrl: any;

	constructor(
		private navParams: NavParams,
		private sanitizer: DomSanitizer,
		private socialSharing: SocialSharing) {
		this.video = navParams.get('video');
		this.prepareResource();
	}

    prepareResource () {
    	let url = 'http://www.youtube.com/embed/' + this.video.id.videoId;
		this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

	shareVideo() {
		let subject = this.video.snippet.title;
        let message = this.video.snippet.description;
        message = message.replace(/(<([^>]+)>)/ig,"");
        let url = 'http://www.youtube.com/embed/' + this.video.id.videoId;

		setTimeout(() => this.socialSharing.share(message, subject, '', url), 0);
	}

}
