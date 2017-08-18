import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { WordpressService } from '../shared/services/wordpress.service';

@Component({
	selector: 'wordpress-feature-media',
	templateUrl: './wordpress-feature-media.html',
	providers: [WordpressService]
})
export class WordpressFeatureMedia implements OnInit {
	@Input() id: number;

	media: any;

	constructor(
		private wordpressService: WordpressService) {}

	ngOnInit() {
		if (this.id > 0) {
			this.getMedia(this.id);
		}
	}

	getMedia(id) {
		this.wordpressService.getMedia(id)
			.subscribe(result => {
				this.media = result;
			});
	}

}
