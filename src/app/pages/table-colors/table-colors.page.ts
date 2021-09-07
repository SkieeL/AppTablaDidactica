import { Component, AfterContentChecked } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table-colors',
  templateUrl: './table-colors.page.html',
  styleUrls: ['./table-colors.page.scss'],
})
export class TableColorsPage implements AfterContentChecked {
  public platform: Platform;
  public router: Router;
  public data: DataService;
  public idioma: string;
  public srcIdioma: string;
  public srcCategoria: string;
  public audio: any;

  constructor(platform: Platform, router: Router, data: DataService) {
    this.platform = platform;
    this.router = router;
    this.data = data;
    this.idioma = this.data.getIdioma();
    this.srcIdioma = this.data.getSrcIdioma();
    this.srcCategoria = '../../../assets/images/colores.png';
    this.audio = new Audio();
  }

  ngAfterContentChecked() {
    this.idioma = this.data.getIdioma();
    this.srcIdioma = this.data.getSrcIdioma();
  }

  public toAudio(color: string) {
    this.audio.src = 'assets/sonidos/colores/' + color + this.data.getAbreviatura() + '.mp3';
    this.audio.pause();
    this.audio.load();
    this.audio.play();
  }

  public toEnglish() {
    this.srcIdioma = '../../../assets/images/icon-eng.png';
    this.data.setIdioma('Inglés');
    this.data.setSrcIdioma('../../../assets/images/icon-eng.png');
    this.data.setAbreviatura('_en');
  }

  public toSpanish() {
    this.srcIdioma = '../../../assets/images/icon-esp.png';
    this.data.setIdioma('Español');
    this.data.setSrcIdioma('../../../assets/images/icon-esp.png');
    this.data.setAbreviatura('_es');
  }

  public toGerman() {
    this.srcIdioma = '../../../assets/images/icon-ger.png';
    this.data.setIdioma('Alemán');
    this.data.setSrcIdioma('../../../assets/images/icon-ger.png');
    this.data.setAbreviatura('_ger');
  }

  public toPortuguese() {
    this.srcIdioma = '../../../assets/images/icon-por.png';
    this.data.setIdioma('Portugués');
    this.data.setSrcIdioma('../../../assets/images/icon-por.png');
    this.data.setAbreviatura('_por');
  }

  public toAnimales() {
    this.router.navigate(['/table']);
    this.srcCategoria = '../../../assets/images/mapache.png';
  }

  public toColores() {
    this.srcCategoria = '../../../assets/images/colores.png';
  }

  public toNumeros() {
    this.router.navigate(['/table-numbers']);
    this.srcCategoria = '../../../assets/images/numeros.png';
  }
}
