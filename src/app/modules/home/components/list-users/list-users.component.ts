import { Component } from '@angular/core';
import { User } from '../../model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {

  users: User[] = [
    {
      img: '/assets/img/adriana.png',
      name: 'Adriana',
      description: 'Muy rico y abundante! Buena ambientación tradicional. Volvería a ir y lo recomiendo.',
      date: '21 de Mar. 2022 21:00hs'
    },
    {
      img: '/assets/img/ezequiel.png',
      name: 'Ezequiel',
      description: 'Excelente lugar para venir a cenar en familia. Muy buena atención.',
      date: '10 de Jul. 2022 21:00hs'
    },
    {
      img: '/assets/img/carlos.png',
      name: 'Carlos',
      description: 'Festeje mi cumpleaños con amigos y la atención fue grandiosa.',
      date: '15 de Oct. 2022 23:00hs'
    },
    {
      img: '/assets/img/fabio.png',
      name: 'Fabio',
      description: 'Muy rico. Volvería a ir y lo recomiendo.',
      date: '2 de Mar. 2022 18:00hs'
    },
  ]
}
