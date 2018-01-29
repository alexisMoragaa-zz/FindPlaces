import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',

})
export class DetalleComponent{
  lat:number=-33.4013924;//latitud para cargar el marcador en el mapa
  lng:number=-70.6438089;//longitud para cargar el marcador en el mapa
id = null;
lugar:any = {};
constructor(private route: ActivatedRoute, private lugaresServices: LugaresService){
  console.log(this.route.snapshot.params['id']);
  // console.log(this.route.snapshot.queryParams['action']);
  this.id = this.route.snapshot.params['id'];
  this.lugaresServices.getLugar(this.id)
  .valueChanges().subscribe(lugar => {
    this.lugar = lugar;

  });

}


}
