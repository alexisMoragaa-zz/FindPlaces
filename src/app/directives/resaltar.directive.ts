import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";
//importamos los elementos necesarios para crear nuestra directiva
@Directive({//asignamos el selector para nuestra directiva
  selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit {//exportamos la clase para poder usarla desde fuera
  constructor(private elRef: ElementRef, private renderer: Renderer2) {


  }//inicializamos el constructor de nuestra clase
  @Input('resaltar') existe: string = '';//asignamos el valor de resaltar mediante un input(esta informacion la recivimos desde html mediante nuestra directiva ya creada)
  ngOnInit() {
    if (this.existe === 'no') {//realizamos una validacion o sentencia de control para la iformacion que le subimos mediante el input
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#E6B0AA  ');//usamos render para agregar una propiedad de css a nuestra directiva
    }
  }
}
