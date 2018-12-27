import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router) {}
  @Input() menus: Menu[];

  routeToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
