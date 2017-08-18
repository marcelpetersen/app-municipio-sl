import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  templateUrl: './login.html'
})
export class LoginComponent {
  account: {username: string, password: string} = {
    username: '',
    password: ''
  };
  
  constructor(
    private navController: NavController,
    private toastController: ToastController) {}

  login() {
    let message = 'Succesful Login';
    let toast = this.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
  }
}
