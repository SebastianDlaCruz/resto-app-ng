import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrl: './nav-bar-admin.component.css'
})
export class NavBarAdminComponent {


  items = [

    {
      title: 'Platos',
      links: [
        {
          name: 'Listado',
          link: 'platos/lista'

        },
        {
          name: 'Agregar',
          link: 'platos/agregar'

        },
      ]
    },
    {
      title: 'Categorías',
      links: [
        {
          name: 'Listado',
          link: 'categorias/lista'

        },
        {
          name: 'Agregar',
          link: 'categorias/agregar'

        }
      ]
    },
    {
      title: 'Ventas',
      links: [
        {
          name: 'Listado',
          link: ''

        },
      ]
    }

  ]
}
