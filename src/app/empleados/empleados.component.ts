import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent {
  public nombre_empleado = 'hola soy un empleado';
  public empleado: Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo:boolean;
  public color :string;
  public color_seleccionado:string;

  constructor() {
    this.empleado = new Empleado('David', 45, 'prgramador', false);
    this.trabajadores = [
      new Empleado('antonio', 48, 'prgramador', true),
      new Empleado('Manolo', 48, 'profesor', true),
      new Empleado('Marta', 54, 'cocinera', false)
    ]
    this.trabajador_externo = false;
    this.color = 'green';
    this.color_seleccionado = '#CCC';

  }

  ngOnInit() {
  }
  cambiarExterno(valor){
    this.trabajador_externo = valor

  }
}

