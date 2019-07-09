import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges {
  constructor(private router: Router, private menuService: MenuService) {}
  @Input() menus: Menu[];

  ngOnChanges() {
    console.log(this.menus);
  }


  menuClicked(url: string, menus: Menu[]) {
    if (menus && menus.length > 0) {
      this.menuService.menus = menus;
      this.router.navigate(['']);
    } else {
      this.router.navigate([url]);
    }
  }
}
