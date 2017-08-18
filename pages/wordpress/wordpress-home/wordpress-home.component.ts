import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { WordpressLogin } from '../wordpress-login/wordpress-login.component';
import { WordpressPosts } from '../wordpress-posts/wordpress-posts.component';
import { WordpressCategories } from '../wordpress-categories/wordpress-categories.component';
import { WordpressFavorites } from '../wordpress-favorites/wordpress-favorites.component';
import { WordpressPages } from '../wordpress-pages/wordpress-pages.component';
import { WordpressMenus } from '../wordpress-menus/wordpress-menus.component';

@Component({
  templateUrl: 'wordpress-home.html'
})
export class WordpressHome {
	user: any;
	pages: Array<{title: string, component: any, icon: string, note: string}>;

	constructor(
		private navController: NavController,
		private navParams: NavParams,
		private storage: Storage) {
			this.user = navParams.get('user');
	}

	ngOnInit() {
		this.getUser();
	  	this.pages = [
	  	  { title: 'MENUS', component: WordpressMenus, icon: 'menu', note: 'Wordpress' },
	      { title: 'POSTS', component: WordpressPosts, icon: 'logo-wordpress', note: 'Wordpress' },
	      { title: 'CATEGORIES', component: WordpressCategories, icon: 'pricetags', note: 'Wordpress' },
	      { title: 'FAVORITES', component: WordpressFavorites, icon: 'heart', note: 'Wordpress (Storage)' },
	      { title: 'PAGES', component: WordpressPages, icon: 'document', note: 'Wordpress' }
	    ];
	}

	getUser() {
	    this.storage.get('wordpress.user')
	    .then(data => {
	        if(data) {
	        	this.user = data;
	        }
	    });
	}

	login() {
		this.navController.push(WordpressLogin);
	}

	logout() {
		this.user = undefined;
		this.storage.remove('wordpress.user');
	}

	openPage(page) {
		this.navController.push(page.component);
	}
}
