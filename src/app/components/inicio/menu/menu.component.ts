import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../interfaces/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: Menu[] = [];

  constructor(private _menuService: MenuService) {  }

  ngOnInit(): void {
    this.cargarMenu();
    
  }

  cargarMenu() {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    })
  }

}
