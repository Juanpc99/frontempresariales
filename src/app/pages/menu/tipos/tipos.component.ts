import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {
  clientes = [
    {
    id: 1,
    numeroIdentificacion: 6546546,
    primerApellido: 'Caro',
    segundoApellido: 'Vargas',
    nombre: 'Juan',
    telefono: '+57 315200515',
    correo: 'ffgegerg@egegerg.com'
  },
    {
    id: 2,
    numeroIdentificacion: 4546,
    primerApellido: 'Rojas',
    segundoApellido: 'Vargas',
    nombre: 'Camilo',
    telefono: '+57 315200515',
    correo: 'ffgegerg@egegerg.com'
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(){
    this.clientes.shift;
  }
}
