import { Injectable } from '@angular/core';
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  _menus: Menu[];

  public set menus(menus: Menu[]) {
    this._menus = menus;
  }
  public get menus(): Menu[] {
    return this._menus;
  }
}
