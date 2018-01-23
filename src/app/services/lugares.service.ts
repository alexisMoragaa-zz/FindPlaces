import { Injectable } from '@angular/core';
import { AngularFireDatabase } from'angularfire2/database';

@Injectable()
export class LugaresService{

  lugares:any=[
    {id: 1, plan:'pagado',cercania:1, distancia:1, nombre:'Floreia la Gardenia', active:true,description:"esta es una descripcion generica que aplica a todos los puntos actualmente"},
    {id: 2, plan:'pagado',cercania:1, distancia:1.8, nombre:'Donas la Pasadita', active:true,description:"esta es una descripcion generica que aplica a todos los puntos actualmente"},
    {id: 3, plan:'pagado',cercania:2, distancia:5, nombre:'Veterinaria Huellitas Felices',active:true,description:"esta es una descripcion generica que aplica a todos los puntos actualmente"},
    {id: 4, plan:'pagado',cercania:3, distancia:10, nombre:'Hotel la Gracia', active:false,description:"esta es una descripcion generica que aplica a todos los puntos actualmente"},
    {id: 5, plan:'pagado',cercania:3, distancia:135, nombre:'Spa Relax',active:true,description:"esta es una descripcion generica que aplica a todos los puntos actualmente"},
    {id: 6, plan:'pagado',cercania:3, distancia:120, nombre:'Bar de Mou', active:false,description:"esta es una descripcion generica que aplica a todos los puntos actualmente"},
  ];//este es el array que usamos a lo largo de todos los ejemplos con listas en nuestra html
constructor(private afDB:AngularFireDatabase){}


  public getLugares(){
    return this.afDB.list('lugares/');

  }
  public buscarLugar(id){

  return this.afDB.object('lugares/'+id);
  }

  public guardarLugar(lugar){
    console.log(lugar);

    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }


}
