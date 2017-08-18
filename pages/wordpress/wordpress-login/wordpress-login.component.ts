import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { WordpressService } from '../shared/services/wordpress.service';
import { WordpressHome } from '../wordpress-home/wordpress-home.component';

@Component({
  templateUrl: './wordpress-login.html',
  providers: [ WordpressService ]
})
export class WordpressLogin {
  account: {username: string, password: string} = {
    username: '',
    password: ''
  };
  
  constructor(
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private storage: Storage,
    private wordpressService: WordpressService) {}

  login() {
    let loader = this.loadingController.create({
      content: "Please wait"
    });
    loader.present();

    this.wordpressService.login(this.account).subscribe((result) => {
      loader.dismiss();
      this.storage.set('wordpress.user', result);
      this.navController.push(WordpressHome, {
        user: result
      });
    }, (error) => {
      loader.dismiss();
      let errorMessage = error.json();
      if (errorMessage && errorMessage.message) {
        let message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, '');
        let toast = this.toastController.create({
          message: message,
          duration: 6000,
          position: 'bottom'
        });
        toast.present();
      }
    });
  }
}
