import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../../app/app.config';
import 'rxjs/add/operator/map';

@Injectable()
export class Service {

	constructor(private http: Http, private config: Config) {}

	public getContents(type) {
		let url = this.config.baseUrl + this.config.apiVersion + `/` + type;
		return this.http.get(url)
	  	.map(result => {
			return result.json();
		});    
	}

	public getPage(name) {
		let url = 'assets/data/' + name + '.json';
		return this.http.get(url)
	  	.map(result => {
			return result.json();
		});    
	}

	public login(data) {
		let url = this.config.wordpressApiUrl + '/jwt-auth/v1/token';
		return this.http.post(url, data)
	  	.map(result => {
			return result.json();
		});    
	}

	public getPosts(query) {
		query = this.transformRequest(query);
		let url = this.config.baseUrl + this.config.apiVersion + `/home`;
		return this.http.get(url)
	  	.map(result => {
			return result.json();
		});    
	}

	public getPost(id) {
		return this.http.get(this.config.baseUrl + this.config.apiVersion + `/article/${id}`)
	  	.map(result => {
			return result.json();
		});
	}

	public getActivity(id) {
		return this.http.get(this.config.baseUrl + this.config.apiVersion + `/activity/${id}`)
	  	.map(result => {
			return result.json();
		});
	}

	public getMedia(id) {
		return this.http.get(this.config.wordpressApiUrl + `/wp/v2/media/${id}`)
	  	.map(result => {
			return result.json();
		});
	}

	public getCategories() {
		return this.http.get(this.config.wordpressApiUrl + '/wp/v2/categories?per_page=100')
		.map(result => {
			return result.json();
		});
	}

	public getTags() {
		return this.http.get(this.config.wordpressApiUrl + '/wp/v2/tags?per_page=100')
		.map(result => {
			return result.json();
		});
	}

	public getPages() {
		return this.http.get(this.config.wordpressApiUrl + '/wp/v2/pages?per_page=100')
		.map(result => {
			return result.json();
		});
	}

	/*
	public getPage(id) {
		return this.http.get(this.config.wordpressApiUrl + `/wp/v2/pages/${id}`)
	  	.map(result => {
			return result.json();
		});
	}
	*/

	public getMenus() {
		return this.http.get(this.config.wordpressApiUrl + '/wp-api-menus/v2/menus')
		.map(result => {
			return result.json();
		});
	}

	public getMenu(id) {
		return this.http.get(this.config.wordpressApiUrl + `/wp-api-menus/v2/menus/${id}`)
	  	.map(result => {
			return result.json();
		});
	}

	private transformRequest(obj) {
		let p, str;
		str = [];
		for (p in obj) {
			str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
		}
		return str.join('&');
	}

}