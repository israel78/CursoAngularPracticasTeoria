import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class PeticionesService {
  public url: string;

  getPrueba() {
    return 'Hola mundo';
  }

  constructor(private _http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getArticulos() {
    return this._http.get(this.url)
      .map(res => res.json());
  }

}
