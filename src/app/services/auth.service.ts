import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private angularFireAuth: AngularFireAuth;

  constructor(angularFireAuth: AngularFireAuth) {
    this.angularFireAuth = angularFireAuth;
  }

  Login(correo: string, clave: string) {
    return new Promise((resolve, rejected) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(correo, clave).then(usuario => {
        resolve(usuario);
      }).catch(error => {
        rejected(error);
      });
    });
  }
}
