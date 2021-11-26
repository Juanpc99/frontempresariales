import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'singup', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'editar', loadChildren: () => import('./editar/editar.module').then(m => m.EditarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
