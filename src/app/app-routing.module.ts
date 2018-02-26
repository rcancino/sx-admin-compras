import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './_core/containers/main-page/main-page.component';
import { HomePageComponent } from './_core/containers/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'clientes',
        loadChildren: './clientes/clientes.module#ClientesModule'
      },
      {
        path: 'productos',
        loadChildren: './productos/productos.module#ProductosModule'
      },
      {
        path: 'solicitudes',
        loadChildren: './solicitudes/solicitudes.module#SolicitudesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
