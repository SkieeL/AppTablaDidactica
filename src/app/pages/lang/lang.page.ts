import { Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.page.html',
  styleUrls: ['./lang.page.scss'],
})
export class LangPage {
  public platform: Platform;
  public router: Router;
  private data: DataService;

  constructor(platform: Platform, router: Router, data: DataService) {
    this.platform = platform;
    this.router = router;
    this.data = data;
  }

  public toEnglish() {
    this.router.navigate(['/home']);
    this.data.setIdioma('Inglés');
    this.data.setSrcIdioma('../../../assets/images/icon-eng.png');
    this.data.setAbreviatura('_en');
  }

  public toSpanish() {
    this.router.navigate(['/home']);
    this.data.setIdioma('Español');
    this.data.setSrcIdioma('../../../assets/images/icon-esp.png');
    this.data.setAbreviatura('_es');
  }

  public toGerman() {
    this.router.navigate(['/home']);
    this.data.setIdioma('Alemán');
    this.data.setSrcIdioma('../../../assets/images/icon-ger.png');
    this.data.setAbreviatura('_ger');
  }

  public toPortuguese() {
    this.router.navigate(['/home']);
    this.data.setIdioma('Portugués');
    this.data.setSrcIdioma('../../../assets/images/icon-por.png');
    this.data.setAbreviatura('_por');
  }
}
