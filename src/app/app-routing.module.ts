import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'lang', loadChildren: './pages/lang/lang.module#LangPageModule' },
  { path: 'table', loadChildren: './pages/table/table.module#TablePageModule' },
  { path: 'table-numbers', loadChildren: './pages/table-numbers/table-numbers.module#TableNumbersPageModule' },
  { path: 'table-colors', loadChildren: './pages/table-colors/table-colors.module#TableColorsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
