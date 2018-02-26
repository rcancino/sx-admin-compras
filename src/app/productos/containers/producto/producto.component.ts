import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../../models';

@Component({
  selector: 'sx-producto',
  templateUrl: './producto.component.html'
})

export class ProductoComponent implements OnInit {

  producto$: Observable<Producto>;

  constructor(private route: ActivatedRoute, private service: ProductosService) {
  }

  ngOnInit() {
    this.producto$ = this.route.paramMap.switchMap( params => this.service.get(params.get('id')));
  }
}
