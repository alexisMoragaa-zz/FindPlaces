import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service'
import {AutorizacionesService} from '../services/autorizaciones.service';
import {trigger, state, style, transition, animate} from "@angular/animations"


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations:[
    trigger('loadPlaces',[
      state('inicial',style({
        opacity:0
      })),
      state('final',style({
        opacity:1
      })),
      transition('inicial => final', animate(500)),
      transition('final => inicial', animate(500)),
    ])
  ]

})
export class LugaresComponent {
state="inicial";
  lat:number=-33.4013924;//latitud para cargar el marcador en el mapa
  lng:number=-70.6438089;//longitud para cargar el marcador en el mapa
  lugares = null;
  destacados = null;
  errorText='';

  constructor(lugaresSer: LugaresService, private authservice:AutorizacionesService){
    // this.lugares = lugaresSer.getLugares();
    lugaresSer.getLugares()
      .valueChanges().subscribe(lugares => {//cuando usamos la peticion get mediante http quitamos el ValueChanges().subscribe()
        // this.lugares = lugares;//obtenemos mediante web sockets

        this.lugares = lugares;//cuando hacemos la peticion completa y formateamos la peticion con el operador map, este ya conbierte
        // el objeto a json por nosotros, es por esto que cambiamos nuestra linea de this.lugares = lugares.json(); a this.lugares = lugares;
        //
        // var me = this;//para no perder el scope de la variable this guardamos el mismo en una variable para posteriormente ser usada
        // me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key]; });//combertimos de un objetoa un array, para posteriormente poder iterarlo
         this.state="final";
    },
    error=>{
      console.log(error);
      this.errorText='Actualmente tenemos Dificultades para mostrar la Informacion. Error '+error.statusText;
    });

    lugaresSer.getDestacados()
    .valueChanges().subscribe(destacados=>{
      this.destacados = destacados;
    });

    
  }


}
