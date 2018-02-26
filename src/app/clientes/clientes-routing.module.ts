import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ClientesListComponent,
  ClienteComponent,
  ClienteInfoComponent
} from './containers';
import * as fromContainers from './containers';
import { ClienteResolver } from './services';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ClientesListComponent
      },
      {
        path: ':id',
        component: ClienteComponent,
        resolve: { cliente: ClienteResolver },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: fromContainers.ClienteInfoComponent },
          {
            path: 'facturas',
            component: fromContainers.ClienteFacturasComponent
          },
          {
            path: 'bonificaciones',
            component: fromContainers.ClienteNotasComponent,
            data: { tipo: 'BON' }
          },
          {
            path: 'devoluciones',
            component: fromContainers.ClienteNotasComponent,
            data: { tipo: 'DEV' }
          },
          {
            path: 'cobros',
            component: fromContainers.ClienteCobrosComponent
          },
          {
            path: 'cargos',
            component: fromContainers.ClienteCargosComponent
          },
          {
            path: 'estadoDeCuenta',
            component: fromContainers.EstadoDeCuentaComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}
