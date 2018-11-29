import { OtraComponent } from './otra/otra.component';
import { PaginaComponent } from './pagina/pagina.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 const routes: Routes = [
  { path: '', redirectTo: '/pagina', pathMatch: 'full' },
  { path: 'pagina', component: PaginaComponent },
  { path: 'otra', component: OtraComponent }
];
 @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
