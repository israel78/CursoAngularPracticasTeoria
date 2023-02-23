import { Component } from '@angular/core';

@Component({
  selector: "fruta",
  templateUrl: './fruta.component.html'
})
export class FrutaComponent{
  public   nombre_componente = 'componente de fruta';
  public lista = 'naranja,pera,sandia';
  public tipo: string;
  //Tipos de datos en TypesCript
  //https://code.tutsplus.com/es/tutorials/typescript-for-beginners-basic-data-types--cms-29438


  constructor() {
    this.tipo = 'manzana';
  }
  // Se carga al llamar al constructor
  ngOnInit(){
    this.holaMundo('manolo');


  }
  // tslint:disable-next-line:one-line
  holaMundo(nombre: string){
   // alert('hola' + nombre);
  }
}
