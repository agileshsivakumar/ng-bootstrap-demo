import { Component } from '@angular/core';
import { Menu } from '../menu/menu.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  menus: Menu[] = [
    {
      id: 1,
      name: 'Check Balance',
      url: ''
    },
    {
      id: 2,
      name: 'Withdrawl',
      url: ''
    }
  ];
}
