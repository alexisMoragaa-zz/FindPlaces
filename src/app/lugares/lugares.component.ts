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
  errorText='';
  constructor(lugaresSer: LugaresService){
    // this.lugares = lugaresSer.getLugares();
    lugaresSer.getLugares()
      .subscribe(lugares => {//cuando usamos la peticion get mediante http quitamos el ValueChanges().subscribe()

        // this.lugares = lugares;//obtenemos mediante web sockets

        this.lugares = lugares;//cuando hacemos la peticion completa y formateamos la peticion con el operador map, este ya conbierte
        // el objeto a json por nosotros, es por esto que cambiamos nuestra linea de this.lugares = lugares.json(); a this.lugares = lugares;

        var me = this;//para no perder el scope de la variable this guardamos el mismo en una variable para posteriormente ser usada
        me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });//combertimos de un objetoa un array, para posteriormente poder iterarlo

    },
    error=>{
      console.log(error);
      this.errorText='Actualmente tenemos Dificultades para mostrar la Informacion. Error '+error.statusText;
    });
  }
}
