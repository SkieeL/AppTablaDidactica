import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private srcIdioma: string;
  private idioma: string;
  private abreviatura: string;

  constructor() {
    this.srcIdioma = '../../../assets/images/icon-esp.png';
    this.idioma = 'Español';
    this.abreviatura = '_es';
  }

  getSrcIdioma() {
    return this.srcIdioma;
  }

  getIdioma() {
    return this.idioma;
  }

  getAbreviatura() {
    return this.abreviatura;
  }

  setSrcIdioma(srcIdioma: string) {
    this.srcIdioma = srcIdioma;
  }

  setIdioma(idioma: string) {
    this.idioma = idioma;
  }

  setAbreviatura(abreviatura: string) {
    this.abreviatura = abreviatura;
  }
}
