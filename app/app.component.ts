import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TranslateService } from 'ng2-translate';
import { Config } from './app.config';

import { TabsComponent } from '../pages/tabs/tabs-component/tabs.component';
import { YoutubeChannelComponent } from '../pages/youtube/youtube-channel/youtube-channel.component';
// import { DatetimeComponent } from '../pages/datetime/datetime-component/datetime.component';
// import { RangesComponent } from '../pages/ranges/ranges-component/ranges.component';
// import { SettingsComponent } from '../pages/settings/settings-component/settings.component';
// import { ActionSheetComponent } from '../pages/action-sheet/action-sheet-component/action-sheet.component';
import { PlaceholderComponent } from '../pages/placeholder/placeholder-component/placeholder.component';
//import { FacebookConnectComponent } from '../pages/facebook-connect/facebook-connect-component/facebook-connect.component';
//import { LoginComponent } from '../pages/login/login-component/login.component';
import { WordpressMenus } from '../pages/wordpress/wordpress-menus/wordpress-menus.component';
//import { ContentComponent } from '../pages/content/content-component/content.component';
import { PageComponent } from '../pages/page/page-component/page.component';

@Component({
	templateUrl: './app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage = TabsComponent;
	menuPage = WordpressMenus;
	pages: Array<{title: string, component: any, icon: string, name: string}>;
	wordpressMenusNavigation: boolean = false;

	constructor(
		private platform: Platform,
		private translate: TranslateService,
		private storage: Storage,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen,
		private config: Config,
		private menuController: MenuController,
		) {
		this.initializeApp();

		this.translate.setDefaultLang('es');
		storage.get('language').then((value) => {
			if (value) {
				this.translate.use(value);
			} else {
				this.translate.use('es');
				this.storage.set('language', 'es');
			}
		});

		this.pages = [
		{ title: 'HOME', component: TabsComponent, icon: 'home', name: 'default' },
	    { title: 'Telefonos utiles', component: PageComponent, icon: 'md-call', name: 'phones'},
		{ title: 'Videos', component: YoutubeChannelComponent, icon: 'logo-youtube', name: 'default'},
		{ title: 'Consejo Deliberante', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
		{ title: 'Organigrama', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
		{ title: 'Officina de Empleo', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
		{ title: 'Accion Social', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
		{ title: 'Pensiones', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
		{ title: 'Salud', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
		{ title: 'Deportes', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
	    //{ title: 'DATETIME', component: DatetimeComponent, icon: 'clock', name: 'default'},
	    //{ title: 'RANGES', component: RangesComponent, icon: 'sunny', name: 'default'},
	    //{ title: 'ACTION_SHEET', component: ActionSheetComponent, icon: 'create', name: 'default'},
	    //{ title: 'PLACEHOLDER', component: PlaceholderComponent, icon: 'logo-buffer', name: 'default' },
	    //{ title: 'Facebook Connect', component: FacebookConnectComponent, icon: 'logo-facebook', name: 'default' },
		//{ title: 'LOGIN', component: LoginComponent, icon: 'log-in', name: 'default' },
		// { title: 'CONTENT', component: ContentComponent, icon: 'create' }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Enable RTL Support
			// this.platform.setDir('rtl', true);
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.menuController.close();
		this.nav.setRoot(page.component, {
			section: page.name
		});
	}
}
