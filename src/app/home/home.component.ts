import {Component} from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
  selector:'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})
export class HomeComponent{
  public titulo = "Pagina principal";
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;
  public fecha:Date;
  public nombre = "JUAN Lopez Martinez";
  constructor(
    private _ropaService: RopaService
  ) {
    this.fecha = new Date(2020,2,13);
  }
  ngOnInit(){
    console.log(this._ropaService.prueba2('jersey'))
   this.listado_ropa =  this._ropaService.getRopa();

  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(i: number) {
    this._ropaService.deletePrenda(i);
  }
}
