import {Pipe,PipeTransform} from '@angular/core';
import {pipe} from 'rxjs/util/pipe';

@Pipe({name:'conversor'})
export class ConversorPipe implements PipeTransform{
  transform(value: string, por:string): any {
    let value_one = parseInt(value);
    let value_two = parseInt(por);
    let result = "la multiplicacion: "+value_one+"x "+value_two+"  = "+(value_one*value_two)+"";
    return result;
  }
}
