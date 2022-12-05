import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { InicioComponent } from './inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: InicioComponent, children: [
    {  path: '', component: InicialComponent },
    {  path: 'peliculas', component: PeliculasComponent },
    {  path: 'contacto', component: ContactoComponent },
    {  path: 'nosotros', component: NosotrosComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
