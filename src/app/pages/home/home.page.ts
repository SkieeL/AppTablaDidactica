import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public platform: Platform;
  public router: Router;

  constructor(platform: Platform, router: Router) {
    this.platform = platform;
    this.router = router;
  }

  public toAnimales() {
    this.router.navigate(['/table']);
  }

  public toColores() {
    this.router.navigate(['/table-colors']);
  }

  public toNumeros() {
    this.router.navigate(['/table-numbers']);
  }
}
