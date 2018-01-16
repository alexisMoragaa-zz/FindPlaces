import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  but = true;//variable que sera modificada con property binding
  btn = "btn btn-outline-warning"//variable que sera modificada con property binding

  title = 'string interpolation';
  //string interpolation es una forma de hacerlo, y con esto simplemente le enviamos una variable a nuestra vista

  lat:number=-33.3898208;//latitud para cargar el marcador en el mapa
  lng:number=-70.64833810000005;//longitud para cargar el marcador en el mapa

  constructor(){
    //creamos un contructor para esta clase, para de esta forma ejecutar una funcion que abilitara y desabilitara el boton
    //cada tres segundos usando la funcion setTimeout de js
    //()=>{}  de esta forma se declaran las funciones anonimas en typescript

    setTimeout(()=>{//desabilitamos el boton despues de siete segundos
      this.but =false;
      this.btn = "btn btn-outline-success float-right"
    },7000)

  }

  clickme(){
    alert('hiciste click en el boton y desencadenaste la funcion asignada mediante Event Binding');
  }

  name='';
  lastName='';

  lista:any=[
    {nombre:'Valentina Diaz'},
    {nombre:'Alexis Moraga'},
    {nombre:'Bastian Moraga'}
  ];

  listangif:any=[
    {active:true,nombre:'Valentina Diaz'},
    {active:true,nombre:'Alexis Moraga'},
    {active:false,nombre:'Bastian Moraga'}
  ];

  desafio:any=[
    {nombre:'Alexis Moraga',edad:25},
    {nombre:'Valentina Diaz',edad:27},
    {nombre:'Bastian Moraga',edad:4}
  ];
}
