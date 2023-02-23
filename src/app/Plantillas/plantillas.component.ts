import {Component} from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: 'plantillas.component.html',
})
export class PlantillasComponent{
  public titulo = "Plantillas ngTemplate en angular";
  public administrador;


  constructor() {
this.administrador = true;
  }

  cambiar() {
    this.administrador = !this.administrador;
  }
}
