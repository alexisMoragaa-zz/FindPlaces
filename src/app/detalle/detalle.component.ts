import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',

})
export class DetalleComponent{
  lat:number=-33.3898208;//latitud para cargar el marcador en el mapa
  lng:number=-70.64833810000005;//longitud para cargar el marcador en el mapa

  lugares:any=[
    {id: 1, plan:'Premium', cercania:1, distancia:1, nombre:'Floreia la Gardenia', active:true, description:'Esta es la descripcion de todas nuestras tiendas por el momento, mas delante pondremos una descripcion por cada tienda en nuestro PlatziSquare'},
    {id: 2, plan:'Gratuita', cercania:1, distancia:1.8, nombre:'Donas la Pasadita', active:true, description:'Esta es la descripcion de todas nuestras tiendas por el momento, mas delante pondremos una descripcion por cada tienda en nuestro PlatziSquare'},
    {id: 3, plan:'Premium', cercania:2, distancia:5, nombre:'Veterinaria Huellitas Felices',active:true, description:'Esta es la descripcion de todas nuestras tiendas por el momento, mas delante pondremos una descripcion por cada tienda en nuestro PlatziSquare'},
    {id: 4, plan:'Gratuita', cercania:3, distancia:10, nombre:'Hotel la Gracia', active:false, description:'Esta es la descripcion de todas nuestras tiendas por el momento, mas delante pondremos una descripcion por cada tienda en nuestro PlatziSquare'},
    {id: 5, plan:'Premium', cercania:3, distancia:135, nombre:'Spa Relax',active:true, description:'Esta es la descripcion de todas nuestras tiendas por el momento, mas delante pondremos una descripcion por cada tienda en nuestro PlatziSquare'},
    {id: 6, plan:'Gratuita', cercania:3, distancia:120, nombre:'Bar de Mou', active:false, description:'Esta es la descripcion de todas nuestras tiendas por el momento, mas delante pondremos una descripcion por cada tienda en nuestro PlatziSquare'},
  ];//este es el array que usamos a lo largo de todos los ejemplos con listas en nuestra html
id = null;
lugar:any = {};
constructor(private route: ActivatedRoute){
  console.log(this.route.snapshot.params['id']);
  console.log(this.route.snapshot.queryParams['action']);
  this.id = this.route.snapshot.params['id'];
  this.lugar = this.buscarLugar();
}
buscarLugar(){
  return this.lugares.filter((lugar) => { return lugar.id == this.id})[0] || null;
}

}
