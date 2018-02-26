import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { SharedModule } from '../_shared/shared.module';
import { ProductosRoutingModule } from './productos-routing.module';

// Components
import * as fromComponents from './components';

// Containers
import * as fromContainers from './containers';

// Services
import * as fromServices from './services';

@NgModule({
  imports: [
    SharedModule,
    ProductosRoutingModule,
    StoreModule.forFeature('productos', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services],
  declarations: [...fromComponents.components, ...fromContainers.containers],
})
export class ProductosModule {}
