import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
	templateUrl: './youtube-video.html'
})
export class YoutubeVideoComponent {
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
    	let url = 'http://www.youtube.com/embed/' + this.video.snippet.resourceId.videoId;
		this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

	shareVideo() {
		let subject = this.video.snippet.title;
        let message = this.video.snippet.description;
        message = message.replace(/(<([^>]+)>)/ig,"");
        let url = 'http://www.youtube.com/embed/' + this.video.snippet.resourceId.videoId;
		setTimeout(() => this.socialSharing.share(message, subject, '', url), 250);
	}

}
