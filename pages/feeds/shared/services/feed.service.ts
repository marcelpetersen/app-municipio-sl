import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../../../app/app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedService {

	constructor(private http: Http, private config: Config) {}

	public getCategories() {
		let url = this.config.feedsUrl;
		return this.http.get(url)
	  	.map(result => {
			return result.json();
		});    
	}

	public getCategory() {
		let url = this.config.feedsCategoryUrl;
		return this.http.get(url)
	  	.map(result => {
			return result.json();
		});    
	}

	public getFeeds(source) {
		let url = 'https://query.yahooapis.com/v1/public/yql?q=select * from xml where url ="' + encodeURIComponent(source) + '"&format=json';
		return this.http.get(url)
	  	.map(result => {
			return result.json();
		});  
	}

}