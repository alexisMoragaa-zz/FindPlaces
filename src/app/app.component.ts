import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
but = true;

  //tenemos 4 opciones de data binding para enviar valores a nuestra vista
  constructor(){
    //creamos un contructor para esta clase, para de esta forma ejecutar una funcion que abilitara y desabilitara el boton
    //cada tres segundos usando la funcion setTimeout de js
    //()=>{}  de esta forma se declaran las funciones anonimas en typescript

    setTimeout(()=>{//desabilitamos el boton despues de tres segundos
      this.but =false;
    },5000)

  }

  title = 'string interpolation';
  //string interpolation es una forma de hacerlo, y con esto simplemente le enviamos una variable a nuestra vista

  clickme(){
    alert('hiciste click en el boton y desencadenaste la funcion asignada mediante Event Binding');
  }

  name='';
  lastName='';
}
