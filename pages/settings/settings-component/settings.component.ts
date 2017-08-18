import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from 'ng2-translate';

@Component({
    templateUrl: 'settings.html'
})
export class SettingsComponent implements OnInit {

	language: string;

	constructor(
		private storage: Storage,
		private translate: TranslateService
		){}

	ngOnInit() {
	    this.storage.get('language')
	    .then(value => {
	        if(value) {
	        	this.language = value;
	        } else {
	        	this.language = 'en';
	        }
	    });
	}

	selectLanguage() {
		this.storage.set('language', this.language);
        this.translate.setDefaultLang(this.language);
        this.translate.use(this.language);
	}

}


