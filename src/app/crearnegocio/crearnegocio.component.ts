import { Component} from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-crearnegocio',
  templateUrl: './crearnegocio.component.html',

})
export class CrearnegocioComponent{

    lugar:any = {} ;
    id:any ="";
  constructor(private lugaresServices: LugaresService, private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if(this.id !='new'){
      this.lugaresServices.getLugar(this.id)
      .valueChanges().subscribe((lugar)=>{
        this.lugar = lugar;
      });
    }
  }


    guardarLugar(){
      var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
      this.lugaresServices.obtenerGeoData(direccion)
        .subscribe((result) =>{
          this.lugar.lat=result.json().results[0].geometry.location.lat;
          this.lugar.lng=result.json().results[0].geometry.location.lng;


          if(this.id != 'new'){
            this.lugaresServices.editarLugar(this.lugar);
            alert('Editado Con Exito');
          }else{
            this.lugar.id = Date.now();
            this.lugaresServices.guardarLugar(this.lugar);
            alert('Negocio Guardado Con Exito');
          }

          this.lugar ={};
        })

    }


}
