import * as fromProductos from '../actions/productos.actions';
import { Producto } from '../../models';

import * as _ from 'lodash';

export interface ProductoState {
  entities: {[id: string]: Producto};
  loaded: boolean;
  loading: boolean;
}

export const initalState: ProductoState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initalState,
  action: fromProductos.ProductosActions,
): ProductoState {
  switch (action.type) {
    case fromProductos.LOAD_PRODUCTOS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromProductos.LOAD_PRODUCTOS_SUCCESS: {

      const productos = action.payload;
      const entities = _.keyBy(productos, item => item.id)
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromProductos.LOAD_PRODUCTOS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }
  return state;
}

export const getProductosEntities = (state: ProductoState) => state.entities;
export const getProductosLoading = (state: ProductoState) => state.loading;
export const getProductosLoaded = (state: ProductoState) => state.loaded;
