import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service'

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',

})
export class LugaresComponent {

  lat:number=-33.3898208;//latitud para cargar el marcador en el mapa
  lng:number=-70.64833810000005;//longitud para cargar el marcador en el mapa
  lugares = null;
constructor(lugaresSer: LugaresService){
  // this.lugares = lugaresSer.getLugares();
  lugaresSer.getLugares()
    .valueChanges().subscribe(lugares => {
      
      this.lugares = lugares;
    });
}
}
