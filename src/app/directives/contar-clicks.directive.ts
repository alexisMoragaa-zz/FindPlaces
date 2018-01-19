import {Directive, HostListener, HostBinding} from "@angular/core";
@Directive({
  selector:'li[contar-clicks]'
  //asignamos el nombre de nuestra directiva y la creamos solo para elementos de tipo <a href=""></a>
})

export class ContarClicksDirective{//exportamos la clase
  clickN = 0;//inicializamos una variable con la cual contamos los clicks
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click',['$event.target']) onClick(btn){//usamso el hostlistener para contar los clicks
    console.log('a',btn,"numero de clicks",this.clickN++);
    this.opacity += .1;
  }
}
