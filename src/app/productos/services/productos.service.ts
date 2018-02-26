import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { ConfigService } from 'app/utils/config.service';
import { Producto } from '../models';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductosService {
  private apiUrl: string;

  constructor(private http: HttpClient, config: ConfigService) {
    this.apiUrl = config.buildApiUrl('productos');
  }

  get(id: string): Observable<Producto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Producto>(url);
  }

  list(filtro?: any): Observable<Producto[]> {
    let params = new HttpParams();
    _.forIn(filtro, (value, key) => {
      params = params.set(key, value);
    });
    return this.http
      .get<Producto[]>(this.apiUrl, { params: params })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  save(producto: Producto) {
    return this.http.post(this.apiUrl, producto);
  }

  update(producto: Producto) {
    const url = `${this.apiUrl}/${producto.id}`;
    return this.http.put(url, producto);
  }

  delete(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
