import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ProductoComponent,
  ProductosComponent,
  ProductosListComponent,
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: ProductosComponent,
    children: [
      { path: '', component: ProductosListComponent },
      { path: ':id', component: ProductoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
