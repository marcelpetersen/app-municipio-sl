import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Config } from '../../../app/app.config';

@Component({
  selector: 'page-intendente',
  templateUrl: 'intendente.html'
})
export class IntendenteComponent {
  email: {subject: string, body: string} = {
    subject: '',
    body: ''
  };

  constructor(
  	private navCtrl: NavController,
  	private config: Config,
    private emailComposer: EmailComposer
  ) {}

  sendEmail() {
  	let email = {
  		to: this.config.emailTo,
  		cc: '',
  		bcc: '',
  		attachments: [],
  		subject: this.email.subject,
  		body: this.email.body,
  		isHtml: true
  	};
  	this.emailComposer.open(email);
  }

}
