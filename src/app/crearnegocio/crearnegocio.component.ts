import { Component} from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from "@angular/router";
import {FormControl} from "@angular/forms";
import {Observable} from 'rxjs';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-crearnegocio',
  templateUrl: './crearnegocio.component.html',

})
export class CrearnegocioComponent{

    lugar:any = {} ;
    id:any ="";
    results$: Observable <any>;
    // private searchField:FormControl;
  constructor(private lugaresServices: LugaresService, private route: ActivatedRoute, private http:Http){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if(this.id !='new'){
      this.lugaresServices.getLugar(this.id)
      .valueChanges().subscribe((lugar)=>{
        this.lugar = lugar;
      });
    }
    // const URL='https://maps.google.com/maps/api/geocode/json?key=AIzaSyAsDhDzeXPHkDx5oDV54c4hJmZvpVKKduM';
    // this.searchField = new FormControl();
    // this.results$ = this.searchField.valueChanges
    //   .debounceTime(500)
    //   .switchMap(query => this.http.get(`${URL}&address=${query}`))
    //   .map(response => response.json())
    //   .map(response =>response.results);
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
