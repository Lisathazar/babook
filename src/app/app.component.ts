import { Component, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { TabsPageModule } from './tabs/tabs.module';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private deeplinks: Deeplinks,
    private zone: NgZone,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('ih');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
/*     this.deeplinks.route({
        '': TabsPageModule,
      }).subscribe(match => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Successfully matched route', match);
      }, nomatch => {
        // nomatch.$link - the full link data
        console.error('Got a deeplink that didn\'t match', nomatch);
      }); */

    App.addListener('appUrlOpen', (data: any) => {
        this.zone.run(() => {
            // Example url: https://beerswift.app/tabs/tab2
            // slug = /tabs/tab2
            console.log('data', data);
            const slug = data.url.split("https://babook-ca5e5.web.app").pop();
            console.log('SLUG', slug);
            if (slug) {
                this.router.navigateByUrl(slug);
            }
            // If no match, do nothing - let regular routing 
            // logic take over
        });
    });
  }
  }

