import { Component } from '@angular/core';
import { Menu } from '../menu/menu.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  menus: Menu[] = [
    {
      id: 1,
      name: 'User Id & Password',
      url: 'dashboard'
    },
    {
      id: 2,
      name: 'Debit Card & PIN',
      url: 'dashboard'
    },
    {
      id: 3,
      name: 'Biometrics',
      url: 'dashboard'
    },
    {
      id: 4,
      name: 'Pay Bill',
      url: 'dashboard'
    },
    {
      id: 5,
      name: 'Cash with Token',
      url: 'dashboard'
    },
    {
      id: 6,
      name: 'Game Tickets',
      url: 'dashboard'
    }
  ];
}
