import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{
  public nombre_prenda = 'pantalones vaqueros'
  public coleccion_ropa = ['pantalones balcos','camiseta roja'];
  prueba(){
    return this.nombre_prenda;
  }
  prueba2(nombre_prenda){
    return nombre_prenda;
  }
  addRopa(nombre_prenda:string):Array<string>{
    this.coleccion_ropa.push(nombre_prenda)
    return this.getRopa()
  }
  getRopa(){
    return this.coleccion_ropa;
  }
  deletePrenda(i:number):Array<string>{
    this.coleccion_ropa.splice(i,1);
    return this.coleccion_ropa
  }
}
