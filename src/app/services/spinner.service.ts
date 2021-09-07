import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public loader: any;

  constructor(private loadingCtrl: LoadingController) { }

  public async mostrar(messageSpinner?: string) {
    this.loader = await this.loadingCtrl.create({
      spinner: 'lines',
      keyboardClose: true,
      message: messageSpinner !== '' ? messageSpinner : undefined,
      showBackdrop: true
    });

    this.loader.present();
  }

  public async ocultar() {
    this.loader.dismiss();
  }
}
