import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {path: '', component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EditarRoutingModule { }
