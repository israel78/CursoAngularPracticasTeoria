export class Empleado {
  /*  public nombre:string;
    public edad:number;

    constructor(edad, nombre) {
      this.edad = edad;
      this.nombre = nombre
    }*/

  // @ts-ignore
  constructor(
    public nombre: string,
    public edad: number,
    public cargo: string,
    public contratado: boolean
  ) {}
}
