import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  templateUrl: './facebook-connect.html'
})
export class FacebookConnectComponent {
  user: any;
  
  constructor(
    private navController: NavController,
    private platform: Platform,
    private storage: Storage,
    private fb: Facebook) {}

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.storage.get('facebook.user')
        .then(data => {
            if(data) {
                this.user = JSON.parse(data);
            }
        });
    }

    login() {
        let env = this;
        let permissions = new Array();
        permissions = ['public_profile', 'user_friends', 'email'];

        this.fb.login(permissions)
        .then((response: FacebookLoginResponse) => {
            let userId = response.authResponse.userID;
            let params = new Array();

            this.fb.api("/me?fields=name,gender,email", params)
            .then(function(response) {
                response.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                env.user = response;
                env.storage.set('facebook.user', JSON.stringify(env.user));
            })
        })
        .catch(e => console.log('Error logging into Facebook', e));

       
    }

    logout() {
        let env = this;
        this.fb.logout()
        .then(function(response){
            env.user = null;
            env.storage.remove('facebook.user');
        }, function(error){});
    }

}
