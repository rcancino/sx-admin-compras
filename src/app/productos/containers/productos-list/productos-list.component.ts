import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromStore from '../../store';
import { Producto } from '../../models';

@Component({
  selector: 'sx-productos-list',
  templateUrl: './productos-list.component.html',
})
export class ProductosListComponent implements OnInit {
  productos$: Observable<Producto[]>;

  constructor(private store: Store<fromStore.ProductosState>) {}

  ngOnInit() {
    this.productos$ = this.store
      .select(fromStore.getAllProductos);
    this.store.dispatch(new fromStore.LoadProductos());

  }
}
