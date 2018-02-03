import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamento',
  templateUrl: './fundamento.component.html',
  styleUrls: ['./fundamento.component.css']
})
export class FundamentoComponent {
  but = true;//variable que sera modificada con property binding
  btn = "btn btn-outline-warning"//variable que sera modificada con property binding

  title = 'string interpolation';
  //string interpolation es una forma de hacerlo, y con esto simplemente le enviamos una variable a nuestra vista

  lat:number=-33.3898208;//latitud para cargar el marcador en el mapa
  lng:number=-70.64833810000005;//longitud para cargar el marcador en el mapa
  ejemplotittlecase="En este ejemplo usamos titlecase para agregar mayuscula en  la primera letra de cada palabra y su sintaxis es = |titlecase";
  ejemploupercase="ejemplo de uppercase :escribimos en minisculas, y luego transformamos a mayusculas sintaxis es = |upercase";
  ejemplolowercase="EJEMPLO DE LOWERCASE :ESCRIBIMOS EN MAYUSCULAS, Y LUEGO TRANSFORMAMOS SU SINTAXIS ES = |lowercase";
  ejemplopipe="Este es un ejemplo de lon que se puede hacer con la libreria linkify @linkify #linkify visitanos en https://www.linifyjs.com, estos enlaces son transformados en enlacesa con linkify";

  constructor(){
    //creamos un contructor para esta clase, para de esta forma ejecutar una funcion que abilitara y desabilitara el boton
    //cada tres segundos usando la funcion setTimeout de js
    //()=>{}  de esta forma se declaran las funciones anonimas en typescript

    setTimeout(()=>{//desabilitamos el boton despues de siete segundos
      this.but =false;
      this.btn = "btn btn-outline-success float-right"
    },7000)

  }
funciona(){
  console.log("esto funca");
}
  clickme(){
    alert('hiciste click en el boton y desencadenaste la funcion asignada mediante Event Binding');
  }// esta es una funcion para mostrar un ejemplo de event Binding, ya que se desencadena con el evento click de un boton en nuestro html

  name='';//name y last name son variables que usamos para el ejemplo de twoDataBinding, que comunica el html con el controller y viceversa
  lastName='';

  desafio:any=[
    {existe:'si',cercania:1, distancia:1, nombre:'Alexis Moraga', edad:25, active:true},
    {existe:'si',cercania:2, distancia:5, nombre:'Valentina Diaz', edad:27, active:true},
    {existe:'si',cercania:3, distancia:10, nombre:'Bastian Moraga', edad:4, active:true},
    {existe:'no',cercania:4, distancia:100, nombre:'Sofia Moraga', edad:0, active:false}
  ];//este es el array que usamos a lo largo de todos los ejemplos con listas en nuestra html
}
