import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';


const listPeliculas: Pelicula[] = [
  {identificador: "ACC01", titulo: "Fornite", valoracion: 88.91},
  {identificador: "PLA01", titulo: "Super Mario", valoracion: 91.45},
  {identificador: "ACC02", titulo: "COD", valoracion: 85.23},
  {identificador: "ROL01", titulo: "Zelda", valoracion: 94.05},
  {identificador: "ROL02", titulo: "Gaunlet", valoracion: 90.25},
  {identificador: "PIN01", titulo: "Pinball Deluxe", valoracion: 77.55},
  
];

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {

  displayedColumns: string[] = ['identificador', 'titulo', 'valoracion', 'acciones'];
  dataSource = listPeliculas;

}
