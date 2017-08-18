import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TranslateService } from 'ng2-translate';

@Component({
  templateUrl: './firebase-reset-password.html'
})
export class FirebaseResetPasswordComponent {
  account: {email: string} = {
    email: ''
  };
  
  constructor(
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private angularFireAuth: AngularFireAuth,
    private translate: TranslateService) {}

  resetPassword() {
    let loader = this.loadingController.create({
      content: "Please wait"
    });
    loader.present();
    this.angularFireAuth.auth.sendPasswordResetEmail(
      this.account.email
    ).then((value) => {
      loader.dismiss();
      let message = this.translate.instant('RESET_PASSWORD_EMAIL') + ' ' + this.account.email;
      let toast = this.toastController.create({
        message: message,
        duration: 6000,
        position: 'bottom'
      });
      toast.present();
    }).catch((error) => {
      loader.dismiss();
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
