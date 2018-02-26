import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromProductos from './productos.reducer';

export interface ProductosState {
  productos: fromProductos.ProductoState;
}

export const reducers: ActionReducerMap<ProductosState> = {
  productos: fromProductos.reducer,
};

export const getProductosState = createFeatureSelector<ProductosState>(
  'productos',
);

// Productos State
export const getProductoState = createSelector(
  getProductosState,
  (state: ProductosState) => state.productos,
);

export const getProductosEntities = createSelector(
  getProductoState,
  fromProductos.getProductosEntities,
);
export const getAllProductos = createSelector(
  getProductosEntities,
  (entities) => {
    return Object.keys(entities).map( id => entities[id]);
  }
);
export const getProductosLoaded = createSelector(
  getProductoState,
  fromProductos.getProductosLoaded,
);
export const getProductosLoading = createSelector(
  getProductoState,
  fromProductos.getProductosLoading,
);

/** Meta model
const state = {
  articulos: {
    productos: {
      data: [],
      loaded: false,
      loading: false
    }
  }
}
*/
