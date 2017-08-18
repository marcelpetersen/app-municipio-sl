import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { WordpressService } from '../shared/services/wordpress.service';
import { WordpressPost } from '../wordpress-post/wordpress-post.component';

@Component({
	templateUrl: './wordpress-posts.html',
	providers: [ WordpressService ]
})
export class WordpressPosts implements OnInit {

	posts: any;
	pageCount: number;
	category: any;
	tag: any;
	author: any;
	search: string;
	hideSearchbar: boolean;
	favoritePosts: any;

	constructor(
		private navParams: NavParams,
		private wordpressService: WordpressService,
		private navController: NavController,
		private loadingController: LoadingController,
		private toastController: ToastController,
		private storage: Storage) {}

	ngOnInit() {
		this.category = this.navParams.get('category');
		this.tag = this.navParams.get('tag');
		this.author = this.navParams.get('author');
		this.hideSearchbar = true;
		this.search = '';
		this.favoritePosts = [];
	    this.storage.get('wordpress.favorite')
	    .then(data => {
	        if(data) {
	        	this.favoritePosts = JSON.parse(data);
	        }
	    });
		this.getPosts();
	}

	getPosts() {
		this.pageCount = 1;

		let query = this.createQuery();
		let loader = this.loadingController.create({
			content: "Please wait",
      duration: 10000
		});

		loader.present();
		this.wordpressService.getPosts('home')
		.subscribe(result => {
			this.posts = result;
			loader.dismiss();
		});
	}

	getAuthorPosts(author) {
		this.author = author;
		this.getPosts();
	}

	searchPosts() {
    	this.getPosts();
	}

	loadMore(infiniteScroll) {
		this.pageCount++;

		let query = this.createQuery();
	  	let loader = this.loadingController.create({
			content: "un Momento"
		});
		let toast = this.toastController.create({
			message: "No hay mas notas.",
      duration: 2000
		});

		loader.present();
		this.wordpressService.getPosts(query)
		.subscribe(result => {
			infiniteScroll.complete();
			if(result.length < 1) { 
				infiniteScroll.enable(false);
				toast.present();
			} else {
				this.posts = this.posts.concat(result);
			}
		},
		error => console.log(error),
    () => loader.dismiss());
	}

	loadPost(post) {
		this.navController.push(WordpressPost, {
			post: post
		});
	}

	favoritePost(post) {
	    let newPost:Boolean = true;
	    let message:string;

	    this.favoritePosts.forEach(favPost => {
			if(JSON.stringify(favPost) === JSON.stringify(post)) {
				newPost = false;
			}
	    });
	    
	    if(newPost) {
			this.favoritePosts.push(post);
			this.storage.set('wordpress.favorite', JSON.stringify(this.favoritePosts));
			message = "Este articulo fue guardado en su lista";
	    } else {
	    	message = "Este articulo ya existe en su lista";
	    }
		let toast = this.toastController.create({
			message: message,
            duration: 2000
		});
	    toast.present();
	}

	toggleSearchbar() {
		this.hideSearchbar = !this.hideSearchbar;
	}

	createQuery() {
	let query = {};
	query['page'] = this.pageCount;
	if(this.search) {
	 	query['search'] = this.search;
	}
	if(this.category) {
		query['categories'] = this.category.id;
	}
	if(this.tag) {
		query['tags'] = this.tag.id;
	}
	if(this.author) {
		query['author'] = this.author;
	}
	return query;
	}
}
