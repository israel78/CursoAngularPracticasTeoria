import {Component} from '@angular/core';
import {Coche} from './coches';
import {PeticionesService} from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: 'coches.component.html',
  providers: [PeticionesService]
})
export class CochesComponent {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;

  constructor(private _peticiones_service: PeticionesService) {
    this.coche = new Coche('', null, '');
    this.coches = [new Coche('Seat panda', 12, 'blaco'),
      new Coche('Renault megane', 123, 'rojo')];

  }

  onSubmit() {
    console.log(this.coche);
    this.coches.push(this.coche);
    this.coche = new Coche('', null, '');
  }

  ngOnInit() {
    this._peticiones_service.getArticulos().subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        console.log(error);
        !this.articulos?console.log("Error en el servidor"):console.log("Petición ok");
      }
    );

  }
}
