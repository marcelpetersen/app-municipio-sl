import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Facebook } from '@ionic-native/facebook';
import { FirebaseLoginComponent } from '../firebase-login/firebase-login.component';
import { FirebaseSignUpComponent } from '../firebase-sign-up/firebase-sign-up.component';
import { FirebaseResetPasswordComponent } from '../firebase-reset-password/firebase-reset-password.component';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: './firebase-home.html'
})
export class FirebaseHomeComponent {
  
  auth: any;
  loading: boolean;

  constructor(
    private navController: NavController,
    private toastController: ToastController,
    private angularFireAuth: AngularFireAuth,
    private firebaseDB: AngularFireDatabase,
    private platform: Platform,
    private fb: Facebook) {}

  ngOnInit() {
    this.loading = true;
    this.angularFireAuth.authState.subscribe(data => {
      if (data) {
          this.auth = data;
      } else {
        this.auth = null;
      }
      this.loading = false;
    });
  }

  loginWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential).then((data) => {
          this.auth = data.auth;
        }).catch((error) => {
          let errorMessage = error;
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
      })
    }
    else {
      return this.angularFireAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((data) => {
        this.auth = data.auth;
      }).catch((error) => {
        let errorMessage = error;
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

  login() {
    this.navController.push(FirebaseLoginComponent);
  }

  logout() {
      this.angularFireAuth.auth.signOut();
  }

  signUp() {
    this.navController.push(FirebaseSignUpComponent);
  }

  resetPassword() {
    this.navController.push(FirebaseResetPasswordComponent);
  }

}
