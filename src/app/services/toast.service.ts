import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  async mostrar(mensaje: string, color: string, segundos: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: segundos * 1000,
      color: color
    });
    toast.present();
  }
}
