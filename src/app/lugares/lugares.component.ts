
import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',

})
export class LugaresComponent {

  lat:number=-33.3898208;//latitud para cargar el marcador en el mapa
  lng:number=-70.64833810000005;//longitud para cargar el marcador en el mapa


  lugares:any=[
    {id: 1, plan:'pagado',cercania:1, distancia:1, nombre:'Floreia la Gardenia', active:true},
    {id: 2, plan:'pagado',cercania:1, distancia:1.8, nombre:'Donas la Pasadita', active:true},
    {id: 3, plan:'pagado',cercania:2, distancia:5, nombre:'Veterinaria Huellitas Felices',active:true},
    {id: 4, plan:'pagado',cercania:3, distancia:10, nombre:'Hotel la Gracia', active:false},
    {id: 5, plan:'pagado',cercania:3, distancia:135, nombre:'Spa Relax',active:true},
    {id: 6, plan:'pagado',cercania:3, distancia:120, nombre:'Bar de Mou', active:false},
  ];//este es el array que usamos a lo largo de todos los ejemplos con listas en nuestra html
}
