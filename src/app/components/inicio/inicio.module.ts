import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio.component';
import { InicialComponent } from './inicial/inicial.component';
import { MenuComponent } from './menu/menu.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    InicioComponent,
    InicialComponent,
    MenuComponent,
    PeliculasComponent,
    ContactoComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
