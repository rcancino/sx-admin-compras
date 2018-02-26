import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sx-productos-component',
  templateUrl: './productos.component.html'
})

export class ProductosComponent implements OnInit {

  navmenu: Object[] = [
    {
      icon: 'looks_one',
      route: '',
      title: 'productos',
      description: 'Catálogo de productos'
    },
    {
      icon: 'looks_two',
      route: 'lineas',
      title: 'Líneas',
      description: 'Catálogo de líneas'
    },
    {
      icon: 'looks_three',
      route: 'marcas',
      title: 'Marcas',
      description: 'Catálogo de marcas'
    },
    {
      icon: 'looks_four',
      route: 'clases',
      title: 'Clases',
      description: 'Catálogo de clases'
    }
  ];

  constructor(public media: TdMediaService) {
  }

  ngOnInit() {
  }
}
