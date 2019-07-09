import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menus = [
      {
        id: 1,
        name: 'User Id & Password',
        url: 'dashboard'
      },
      {
        id: 2,
        name: 'Debit Card & PIN',
        url: 'dashboard',
        menus: [
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
        ]
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
}
