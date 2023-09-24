import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.showLottieSplash();
  }

  async showLottieSplash() {
    await this.platform.ready();
    await SplashScreen.hide();
    const lottie = (window as any).lottie;

    if (lottie) {
      await lottie.show();
    }
  }
}
