import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public domain = 'http://45.55.37.120';
	public baseUrl = 'http://45.55.37.120/munisl';
	public wordpressApiUrl = 'http://mobile-apps.today/products/ionic/woocommerce-api/wp-json';
	public apiVersion = '/api/v1';
	// public wordpressApiUrl = 'http://demo.wp-api.org/wp-json'
	public wordpressMenusNavigation = false;
	public feedsUrl = './assets/data/feeds.json';
	public feedsCategoryUrl = './assets/data/feeds-category.json';
	public youtubeKey = 'AIzaSyClMa-MaKro_m95tb--4LaAorl-NmGPJxc';
	public youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/';
	public youtubeUsername = 'ColdplayVEVO';
	public youtubeChannelId = 'UCEJueqSP0d1r_fmhaZqrgXg';
	public youtubeResults = 50;
	public emailTo = 'info@sanjua.com';
}