import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PlanesComponent } from './planes/planes.component';
import { TipoDestinosComponent } from './tipo-destinos/tipo-destinos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { DetallePlanesComponent } from './detalle-planes/detalle-planes.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TiposComponent } from './tipos/tipos.component';


const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [

            {
                path: 'planes', component: PlanesComponent
            },
            {
                path: 'tiposDestino', component: TipoDestinosComponent
            },
            {
                path: 'destinos', component: DestinosComponent
            },
            {
                path: 'detallesPlan', component: DetallePlanesComponent
            },
            {
                path: 'clientes', component: ClientesComponent
            },
            {
                path: 'tipoIdentificacion', component: TiposComponent
            },
            {
                path: '**', component: PlanesComponent
            }
        ]
    },
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MenuRoutingModule {}