import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PlanesComponent } from './planes/planes.component';
import { MenuRoutingModule } from './menu-routing.module';
import { CoreModule } from '../../core/core.module';
import { TipoDestinosComponent } from './tipo-destinos/tipo-destinos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { DetallePlanesComponent } from './detalle-planes/detalle-planes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TiposComponent } from './tipos/tipos.component';



@NgModule({
  declarations: [
    MenuComponent,
    PlanesComponent,
    TipoDestinosComponent,
    DestinosComponent,
    DetallePlanesComponent,
    ClientesComponent,
    TiposComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    CoreModule
  ]
})
export class MenuModule { }
