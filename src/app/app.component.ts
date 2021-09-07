import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public showSplash: boolean;
  public showApp: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.showSplash = false;
    this.showApp = true;
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      timer(1500).subscribe(() => { this.splashScreen.hide(); });
      // timer(2600).subscribe(() => { this.toAudio('login'); });
      timer(5300).subscribe(() => { this.showApp = true; });
      timer(5800).subscribe(() => { this.showSplash = false; });
    });
  }

  public toAudio(sonido: string) {
    const audio = new Audio();
    audio.src = 'assets/sonidos/' + sonido + '.mp3';
    audio.pause();
    audio.load();
    audio.play();
  }
}
