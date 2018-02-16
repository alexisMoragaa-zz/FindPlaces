import { Injectable } from '@angular/core';
import { AngularFireDatabase } from'angularfire2/database';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';//este import corresponde  a un operador, es por esta razon que se importa de esta forma

@Injectable()
export class LugaresService{
API_ENDPOINT ="https://cursoangular4-1516112349964.firebaseio.com";

constructor(private afDB:AngularFireDatabase, private http:Http){}

  public getLugares(){
    return this.afDB.list('lugares/');//obtenemos lugares mediante websockets
    // return this.http.get(this.API_ENDPOINT+'/lugares.json');//obtenemos el objeto lugares mediante http
    // return this.http.get(this.API_ENDPOINT+'/.json')//obtenemos todo lo que tenemos en firebase, para esto necesitamos dar formato anuestra respuesta  es por esto que usamos el operador map
    //   .map((resultado)=>{
    //   const data = resultado.json().lugares;
    //   return data;
  // })
  }

public getDestacados(){
return this.afDB.list('lugares', ref => ref.orderByChild('stars'));

}

  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }


  public guardarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);//llamado por wb sockets
    // const headers = new Headers({"Content-Type":"application/json"});//cabecera de la peticion http
    // return this.http.post(this.API_ENDPOINT+'/lugares.json',lugar,{headers:headers}).subscribe();//peticion http
  }
  public editarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion){
    // return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);

    return this.http.get('https://maps.google.com/maps/api/geocode/json?key=AIzaSyAsDhDzeXPHkDx5oDV54c4hJmZvpVKKduM&address='+direccion);
  }



}
