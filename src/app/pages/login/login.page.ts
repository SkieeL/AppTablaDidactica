import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { SpinnerService } from '../../services/spinner.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private authService: AuthService;
  public platform: Platform;
  private router: Router;
  private correo: string;
  private clave: string;

  constructor(authService: AuthService, platform: Platform, router: Router, private spinner: SpinnerService, private toast: ToastService) {
    this.authService = authService;
    this.platform = platform;
    this.router = router;
    this.correo = '';
    this.clave = '';
  }

  ngOnInit() {
  }

  private onSubmitLogin() {
    this.spinner.mostrar();
    this.authService.Login(this.correo, this.clave).then(usuario => {
      this.spinner.ocultar();
      // this.toast.mostrar('Bienvenido!', 'success', 2);
      // this.toAudio('login');
      this.router.navigate(['/lang']);
    }).catch(error => {
      this.spinner.ocultar();
      this.toast.mostrar('Los datos ingresados son incorrectos!', 'danger', 2);
    });
  }

  private setAdmin() {
    this.correo = 'admin@gmail.com';
    this.clave = '111111';
  }

  private setInvitado() {
    this.correo = 'invitado@gmail.com';
    this.clave = '222222';
  }

  private setUsuario() {
    this.correo = 'usuario@gmail.com';
    this.clave = '333333';
  }

  private setAnonimo() {
    this.correo = 'anonimo@gmail.com';
    this.clave = '444444';
  }

  private setTester() {
    this.correo = 'tester@gmail.com';
    this.clave = '555555';
  }

  public toAudio(sonido: string) {
    const audio = new Audio();
    audio.src = 'assets/sonidos/' + sonido + '.mp3';
    audio.pause();
    audio.load();
    audio.play();
  }
}
