import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
// import { of } from 'rxjs/Observable/of';

import * as productosActions from '../actions/productos.actions';

import { ProductosService } from '../../services/productos.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductosEffect {

  @Effect()
  loadProductos$ = this.actions$.ofType(productosActions.LOAD_PRODUCTOS).pipe(
    switchMap(() => {
      return this.servcice
        .list()
        .pipe(
          map(
            productos => new productosActions.LoadProductosSuccess(productos),
          ),
          catchError(err => Observable.of(new productosActions.LoadProductosFail(err))),
        );
    }),
  );

  constructor(private actions$: Actions, private servcice: ProductosService) {}
}
